using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace task_management_system_backend.Migrations
{
    /// <inheritdoc />
    public partial class AddUpdateDateColumnTask : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "updated",
                table: "task",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "updated",
                table: "task");
        }
    }
}
