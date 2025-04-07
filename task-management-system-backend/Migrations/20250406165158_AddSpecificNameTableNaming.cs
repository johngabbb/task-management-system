using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace task_mangement_system_backend.Migrations
{
    /// <inheritdoc />
    public partial class AddSpecificNameTableNaming : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Accounts",
                table: "Accounts");

            migrationBuilder.RenameTable(
                name: "Accounts",
                newName: "accounts");

            migrationBuilder.RenameColumn(
                name: "Username",
                table: "accounts",
                newName: "username");

            migrationBuilder.RenameColumn(
                name: "Password",
                table: "accounts",
                newName: "password");

            migrationBuilder.RenameColumn(
                name: "FullName",
                table: "accounts",
                newName: "fullname");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "accounts",
                newName: "id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_accounts",
                table: "accounts",
                column: "id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_accounts",
                table: "accounts");

            migrationBuilder.RenameTable(
                name: "accounts",
                newName: "Accounts");

            migrationBuilder.RenameColumn(
                name: "username",
                table: "Accounts",
                newName: "Username");

            migrationBuilder.RenameColumn(
                name: "password",
                table: "Accounts",
                newName: "Password");

            migrationBuilder.RenameColumn(
                name: "fullname",
                table: "Accounts",
                newName: "FullName");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Accounts",
                newName: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Accounts",
                table: "Accounts",
                column: "Id");
        }
    }
}
