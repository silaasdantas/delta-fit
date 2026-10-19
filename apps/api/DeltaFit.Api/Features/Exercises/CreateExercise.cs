using DeltaFit.Api.Persistence;

namespace DeltaFit.Api.Features.Exercises;

public static class CreateExercise
{
    public sealed record Request(string? Name);
    public static void MapCreateExercise(this WebApplication app) =>
        app.MapPost("/api/exercises", async (Request request, ExerciseDbContext db, CancellationToken ct) =>
        {
            if (string.IsNullOrWhiteSpace(request.Name))
                return Results.ValidationProblem(new Dictionary<string, string[]> { ["name"] = ["Informe o nome do exercício."] });
            var exercise = new Exercise { Id = Guid.NewGuid(), Name = request.Name.Trim() };
            db.Exercises.Add(exercise);
            await db.SaveChangesAsync(ct);
            return Results.Json(new ExerciseResponse(exercise.Id, exercise.Name), statusCode: StatusCodes.Status201Created);
        });
}

public sealed record ExerciseResponse(Guid Id, string Name);
