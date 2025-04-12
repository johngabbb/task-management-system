using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace task_management_system_backend.Migrations
{
    /// <inheritdoc />
    public partial class AddSprintTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_task_accounts_userId",
                table: "task");

            migrationBuilder.DropForeignKey(
                name: "FK_task_project_projectId",
                table: "task");

            migrationBuilder.RenameColumn(
                name: "userId",
                table: "task",
                newName: "user_id");

            migrationBuilder.RenameColumn(
                name: "projectId",
                table: "task",
                newName: "project_id");

            migrationBuilder.RenameColumn(
                name: "createdAt",
                table: "task",
                newName: "created");

            migrationBuilder.RenameIndex(
                name: "IX_task_userId",
                table: "task",
                newName: "IX_task_user_id");

            migrationBuilder.RenameIndex(
                name: "IX_task_projectId",
                table: "task",
                newName: "IX_task_project_id");

            migrationBuilder.AddColumn<Guid>(
                name: "sprint_id",
                table: "task",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateTable(
                name: "sprint",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    created = table.Column<DateTime>(type: "datetime2", nullable: false),
                    code = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    project_id = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_sprint", x => x.id);
                    table.ForeignKey(
                        name: "FK_sprint_project_project_id",
                        column: x => x.project_id,
                        principalTable: "project",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_task_sprint_id",
                table: "task",
                column: "sprint_id");

            migrationBuilder.CreateIndex(
                name: "IX_sprint_project_id",
                table: "sprint",
                column: "project_id");

            migrationBuilder.AddForeignKey(
                name: "FK_task_accounts_user_id",
                table: "task",
                column: "user_id",
                principalTable: "accounts",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_task_project_project_id",
                table: "task",
                column: "project_id",
                principalTable: "project",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_task_sprint_sprint_id",
                table: "task",
                column: "sprint_id",
                principalTable: "sprint",
                principalColumn: "id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_task_accounts_user_id",
                table: "task");

            migrationBuilder.DropForeignKey(
                name: "FK_task_project_project_id",
                table: "task");

            migrationBuilder.DropForeignKey(
                name: "FK_task_sprint_sprint_id",
                table: "task");

            migrationBuilder.DropTable(
                name: "sprint");

            migrationBuilder.DropIndex(
                name: "IX_task_sprint_id",
                table: "task");

            migrationBuilder.DropColumn(
                name: "sprint_id",
                table: "task");

            migrationBuilder.RenameColumn(
                name: "user_id",
                table: "task",
                newName: "userId");

            migrationBuilder.RenameColumn(
                name: "project_id",
                table: "task",
                newName: "projectId");

            migrationBuilder.RenameColumn(
                name: "created",
                table: "task",
                newName: "createdAt");

            migrationBuilder.RenameIndex(
                name: "IX_task_user_id",
                table: "task",
                newName: "IX_task_userId");

            migrationBuilder.RenameIndex(
                name: "IX_task_project_id",
                table: "task",
                newName: "IX_task_projectId");

            migrationBuilder.AddForeignKey(
                name: "FK_task_accounts_userId",
                table: "task",
                column: "userId",
                principalTable: "accounts",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_task_project_projectId",
                table: "task",
                column: "projectId",
                principalTable: "project",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
