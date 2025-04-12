using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace task_management_system_backend.Migrations
{
    /// <inheritdoc />
    public partial class AddTaskAndProjectTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "project",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    created = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_project", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "task",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    createdAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    status = table.Column<int>(type: "int", nullable: false),
                    priority = table.Column<int>(type: "int", nullable: false),
                    estimated = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    userId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    projectId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_task", x => x.id);
                    table.ForeignKey(
                        name: "FK_task_accounts_userId",
                        column: x => x.userId,
                        principalTable: "accounts",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "FK_task_project_projectId",
                        column: x => x.projectId,
                        principalTable: "project",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_task_projectId",
                table: "task",
                column: "projectId");

            migrationBuilder.CreateIndex(
                name: "IX_task_userId",
                table: "task",
                column: "userId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "task");

            migrationBuilder.DropTable(
                name: "project");
        }
    }
}
