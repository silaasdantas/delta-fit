using Microsoft.EntityFrameworkCore;

namespace DeltaFit.Api.Persistence;

public sealed class Exercise
{
    public Guid Id { get; set; }
    public required string Name { get; set; }
}

public sealed class ExerciseDbContext(DbContextOptions<ExerciseDbContext> options) : DbContext(options)
{
    public DbSet<Exercise> Exercises => Set<Exercise>();
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // The explicit set matches Char.IsWhiteSpace/String.Trim (Unicode White_Space).
        const string whitespace = "chr(9)||chr(10)||chr(11)||chr(12)||chr(13)||chr(32)||chr(133)||chr(160)||chr(5760)||chr(8192)||chr(8193)||chr(8194)||chr(8195)||chr(8196)||chr(8197)||chr(8198)||chr(8199)||chr(8200)||chr(8201)||chr(8202)||chr(8232)||chr(8233)||chr(8239)||chr(8287)||chr(12288)";
        modelBuilder.Entity<Exercise>(e =>
        {
            e.ToTable("exercises", t => t.HasCheckConstraint("ck_exercises_name_not_blank", $"length(btrim(name, {whitespace})) > 0"));
            e.HasKey(x => x.Id);
            e.Property(x => x.Id).HasColumnName("id").ValueGeneratedNever();
            e.Property(x => x.Name).HasColumnName("name").HasColumnType("text").IsRequired();
        });
    }
}
