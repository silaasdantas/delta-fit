using DeltaFit.Api.Persistence;
using Microsoft.EntityFrameworkCore;

namespace DeltaFit.Api.Features.Exercises;

public static class ListExercises
{
    public static void MapListExercises(this WebApplication app) =>
        app.MapGet("/api/exercises", async (ExerciseDbContext db, HttpResponse response, CancellationToken ct) =>
        {
            response.Headers.CacheControl = "no-store";
            return await db.Exercises.AsNoTracking().OrderBy(e => e.Name).ThenBy(e => e.Id)
                .Select(e => new ExerciseResponse(e.Id, e.Name)).ToArrayAsync(ct);
        });
}
