using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DeltaFit.Api.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class InitialExercises : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "exercises",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_exercises", x => x.id);
                    table.CheckConstraint("ck_exercises_name_not_blank", "length(btrim(name, chr(9)||chr(10)||chr(11)||chr(12)||chr(13)||chr(32)||chr(133)||chr(160)||chr(5760)||chr(8192)||chr(8193)||chr(8194)||chr(8195)||chr(8196)||chr(8197)||chr(8198)||chr(8199)||chr(8200)||chr(8201)||chr(8202)||chr(8232)||chr(8233)||chr(8239)||chr(8287)||chr(12288))) > 0");
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "exercises");
        }
    }
}
