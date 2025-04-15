using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace task_management_system_backend.Migrations
{
    /// <inheritdoc />
    public partial class AddTaskCodeColumn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "code",
                table: "task",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "code",
                table: "task");
        }
    }
}
