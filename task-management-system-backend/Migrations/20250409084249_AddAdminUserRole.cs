using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace task_management_system_backend.Migrations
{
    /// <inheritdoc />
    public partial class AddAdminUserRole : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "user_roles",
                columns: new[] { "id", "account_id", "role_id" },
                values: new object[] { new Guid("7c233e47-2add-4fa3-9c65-bb5426a7dba7"), new Guid("8dd9e73e-217a-4208-a031-7ac5c9551215"), new Guid("1a36152c-268a-4a9a-bb50-1a8f29119b8c") });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "user_roles",
                keyColumn: "id",
                keyValue: new Guid("7c233e47-2add-4fa3-9c65-bb5426a7dba7"));
        }
    }
}
