using System.Net;
using System.Net.Http.Json;
using System.Text;
using DeltaFit.Api.Features.Exercises;
using DeltaFit.Api.Persistence;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
using Npgsql;
using Xunit;

namespace DeltaFit.Api.IntegrationTests;

public sealed class ApiFactory(string connection) : WebApplicationFactory<Program>
{
    protected override void ConfigureWebHost(IWebHostBuilder builder) =>
        builder.UseSetting("ConnectionStrings:Database", connection).UseEnvironment("Testing");
}

public sealed class ExercisesTests : IAsyncLifetime
{
    private string connection = "";
    private ApiFactory factory = null!;
    private HttpClient client = null!;
    private ExerciseDbContext Context() => new(new DbContextOptionsBuilder<ExerciseDbContext>().UseNpgsql(connection).Options);
    public async Task InitializeAsync()
    {
        connection = Environment.GetEnvironmentVariable("DELTAFIT_INTEGRATION_CONNECTION")
            ?? throw new InvalidOperationException("Execute scripts/local.ps1 integration.");
        var cs = new NpgsqlConnectionStringBuilder(connection);
        if (cs.Host != "127.0.0.1" || cs.Port != 55433 || cs.Database != "deltafit_integration_disposable" || cs.Username != "deltafit")
            throw new InvalidOperationException("Limpeza permitida somente no banco descartável de integração do Compose I0.");
        // The runner recreates this specific tmpfs container before the suite.
        await using var db = Context();
        await db.Database.MigrateAsync();
        await db.Database.ExecuteSqlRawAsync("TRUNCATE TABLE exercises");
        factory = new ApiFactory(connection);
        client = factory.CreateClient();
    }
    public async Task DisposeAsync() { client?.Dispose(); if (factory is not null) await factory.DisposeAsync(); }

    [Fact]
    public async Task Creates_lists_and_persists_across_hosts_with_duplicate_names()
    {
        Assert.Empty((await client.GetFromJsonAsync<ExerciseResponse[]>("/api/exercises"))!);
        var post = await client.PostAsJsonAsync("/api/exercises", new { name = " \tAgachamento  São João\n" });
        Assert.Equal(HttpStatusCode.Created, post.StatusCode);
        Assert.Null(post.Headers.Location);
        var created = (await post.Content.ReadFromJsonAsync<ExerciseResponse>())!;
        Assert.NotEqual(Guid.Empty, created.Id);
        Assert.Equal("Agachamento  São João", created.Name);
        await using (var db = Context()) Assert.Equal(created.Name, (await db.Exercises.SingleAsync()).Name);
        using var secondHost = new ApiFactory(connection);
        using var secondClient = secondHost.CreateClient();
        Assert.Equal(created, Assert.Single((await secondClient.GetFromJsonAsync<ExerciseResponse[]>("/api/exercises"))!));
        var duplicate = (await (await secondClient.PostAsJsonAsync("/api/exercises", new { name = created.Name })).Content.ReadFromJsonAsync<ExerciseResponse>())!;
        Assert.NotEqual(created.Id, duplicate.Id);
        await secondClient.PostAsJsonAsync("/api/exercises", new { name = "AAA" });
        var listed = (await secondClient.GetFromJsonAsync<ExerciseResponse[]>("/api/exercises"))!;
        Assert.Equal("AAA", listed[0].Name);
        Assert.Equal(listed.Skip(1).OrderBy(e => e.Id), listed.Skip(1));
    }

    [Theory]
    [InlineData("{}")]
    [InlineData("null")]
    [InlineData("{\"name\":null}")]
    [InlineData("{\"name\":\"\"}")]
    [InlineData("{\"name\":\"   \"}")]
    [InlineData("{\"name\":\"\\t\\r\\n\"}")]
    [InlineData("{\"name\":\"\u00a0\u2003\u202f\"}")]
    [InlineData("{\"name\":123}")]
    [InlineData("{")]
    public async Task Invalid_input_is_problem_details_without_inserts(string json)
    {
        var response = await client.PostAsync("/api/exercises", new StringContent(json, Encoding.UTF8, "application/json"));
        Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);
        Assert.Equal("application/problem+json", response.Content.Headers.ContentType?.MediaType);
        Assert.Contains("name", await response.Content.ReadAsStringAsync());
        await using var db = Context();
        Assert.Empty(await db.Exercises.ToArrayAsync());
    }

    [Theory]
    [InlineData("")]
    [InlineData(" \t\n\r")]
    [InlineData("\u0085\u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000")]
    public async Task Database_constraint_rejects_whitespace(string name)
    {
        await using var db = Context();
        db.Exercises.Add(new Exercise { Id = Guid.NewGuid(), Name = name });
        var error = await Assert.ThrowsAsync<DbUpdateException>(() => db.SaveChangesAsync());
        Assert.Equal(PostgresErrorCodes.CheckViolation, Assert.IsType<PostgresException>(error.InnerException).SqlState);
    }

    [Fact]
    public async Task Unavailable_database_returns_generic_problem()
    {
        var broken = new NpgsqlConnectionStringBuilder(connection) { Port = 1, Timeout = 1, Pooling = false };
        using var badHost = new ApiFactory(broken.ConnectionString);
        using var badClient = badHost.CreateClient();
        foreach (var response in new[] { await badClient.GetAsync("/api/exercises"), await badClient.PostAsJsonAsync("/api/exercises", new { name = "Teste" }) })
        {
            Assert.Equal(HttpStatusCode.InternalServerError, response.StatusCode);
            Assert.Equal("application/problem+json", response.Content.Headers.ContentType?.MediaType);
            var body = await response.Content.ReadAsStringAsync();
            Assert.DoesNotContain("Password", body, StringComparison.OrdinalIgnoreCase);
            Assert.DoesNotContain("Npgsql", body);
            Assert.DoesNotContain("stack", body, StringComparison.OrdinalIgnoreCase);
        }
    }

    [Fact]
    public async Task Cors_accepts_only_configured_local_origin()
    {
        foreach (var origin in new[] { "http://127.0.0.1:3000", "https://example.org" })
        {
            using var request = new HttpRequestMessage(HttpMethod.Options, "/api/exercises");
            request.Headers.Add("Origin", origin);
            request.Headers.Add("Access-Control-Request-Method", "POST");
            var response = await client.SendAsync(request);
            Assert.Equal(origin.EndsWith(":3000"), response.Headers.Contains("Access-Control-Allow-Origin"));
        }
    }
}
