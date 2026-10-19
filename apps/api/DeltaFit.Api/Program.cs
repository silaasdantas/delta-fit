using DeltaFit.Api.Features.Exercises;
using DeltaFit.Api.Persistence;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var connection = builder.Configuration.GetConnectionString("Database")
    ?? throw new InvalidOperationException("Configure ConnectionStrings__Database.");
var origin = builder.Configuration["WebOrigin"] ?? "http://127.0.0.1:3000";
if (!Uri.TryCreate(origin, UriKind.Absolute, out var uri) || !uri.IsLoopback)
    throw new InvalidOperationException("WebOrigin deve ser uma origem local.");
builder.Services.AddDbContext<ExerciseDbContext>(o => o.UseNpgsql(connection));
builder.Services.AddCors(o => o.AddDefaultPolicy(p => p.WithOrigins(origin).WithMethods("GET", "POST").WithHeaders("Content-Type")));
builder.Services.AddProblemDetails();
builder.Services.Configure<RouteHandlerOptions>(o => o.ThrowOnBadRequest = true);
// Do not log exception messages/SQL/parameters, even for local persistence failures.
builder.Logging.AddFilter("Microsoft.EntityFrameworkCore", LogLevel.None);
builder.Logging.AddFilter("Microsoft.AspNetCore.Diagnostics", LogLevel.None);
var app = builder.Build();
app.UseExceptionHandler(handler => handler.Run(async context =>
{
    var exception = context.Features.Get<IExceptionHandlerFeature>()?.Error;
    if (exception is BadHttpRequestException { StatusCode: 400 })
        await Results.Problem(statusCode: 400, title: "Requisição inválida", detail: "Envie um objeto JSON com o campo name em formato de texto.").ExecuteAsync(context);
    else
    {
        app.Logger.LogError("Falha na requisição {TraceId}: {ExceptionType}", context.TraceIdentifier, exception?.GetType().Name);
        await Results.Problem(statusCode: 500, title: "Não foi possível concluir a operação", detail: "Tente consultar a lista antes de enviar novamente.").ExecuteAsync(context);
    }
}));
app.UseStatusCodePages();
app.UseCors();
app.MapCreateExercise();
app.MapListExercises();
app.Run();

public partial class Program;
