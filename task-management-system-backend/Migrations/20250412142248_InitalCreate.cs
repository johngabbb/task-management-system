using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace task_management_system_backend.Migrations
{
    /// <inheritdoc />
    public partial class InitalCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "user_roles",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    role_name = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_user_roles", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "accounts",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    username = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    role_id = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_accounts", x => x.id);
                    table.ForeignKey(
                        name: "FK_accounts_user_roles_role_id",
                        column: x => x.role_id,
                        principalTable: "user_roles",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "user_roles",
                columns: new[] { "id", "role_name" },
                values: new object[,]
                {
                    { new Guid("1a36152c-268a-4a9a-bb50-1a8f29119b8c"), "Admin" },
                    { new Guid("4a8dcd7c-df91-4bfc-b0c8-94d0b9e0e684"), "User" },
                    { new Guid("7db3ddd3-c1aa-4f9f-b442-f229d21f80e2"), "Manager" }
                });

            migrationBuilder.InsertData(
                table: "accounts",
                columns: new[] { "id", "name", "password", "role_id", "username" },
                values: new object[] { new Guid("8dd9e73e-217a-4208-a031-7ac5c9551215"), "System Administrator", "AQAAAAIAAYagAAAAEOgHEgRI4ayuckxnvZ4rBSJRYvLNtIGJviS19r1s28ZE/HADCBgbPpDUgQ0cwkqjKw==", new Guid("1a36152c-268a-4a9a-bb50-1a8f29119b8c"), "admin" });

            migrationBuilder.CreateIndex(
                name: "IX_accounts_role_id",
                table: "accounts",
                column: "role_id");

            migrationBuilder.CreateIndex(
                name: "IX_accounts_username",
                table: "accounts",
                column: "username",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_user_roles_role_name",
                table: "user_roles",
                column: "role_name",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "accounts");

            migrationBuilder.DropTable(
                name: "user_roles");
        }
    }
}
