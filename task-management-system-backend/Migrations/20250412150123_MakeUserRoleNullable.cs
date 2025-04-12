using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace task_management_system_backend.Migrations
{
    /// <inheritdoc />
    public partial class MakeUserRoleNullable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_accounts_user_roles_role_id",
                table: "accounts");

            migrationBuilder.AlterColumn<Guid>(
                name: "role_id",
                table: "accounts",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AddForeignKey(
                name: "FK_accounts_user_roles_role_id",
                table: "accounts",
                column: "role_id",
                principalTable: "user_roles",
                principalColumn: "id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_accounts_user_roles_role_id",
                table: "accounts");

            migrationBuilder.AlterColumn<Guid>(
                name: "role_id",
                table: "accounts",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_accounts_user_roles_role_id",
                table: "accounts",
                column: "role_id",
                principalTable: "user_roles",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
