﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using task_management_system_backend.Data;

#nullable disable

namespace task_management_system_backend.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("task_management_system_backend.Models.Entities.Account", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier")
                        .HasColumnName("id");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("name");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("password");

                    b.Property<Guid?>("UserRoleId")
                        .HasColumnType("uniqueidentifier")
                        .HasColumnName("role_id");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)")
                        .HasColumnName("username");

                    b.HasKey("Id");

                    b.HasIndex("UserRoleId");

                    b.HasIndex("Username")
                        .IsUnique();

                    b.ToTable("accounts");

                    b.HasData(
                        new
                        {
                            Id = new Guid("8dd9e73e-217a-4208-a031-7ac5c9551215"),
                            Name = "System Administrator",
                            Password = "AQAAAAIAAYagAAAAEOgHEgRI4ayuckxnvZ4rBSJRYvLNtIGJviS19r1s28ZE/HADCBgbPpDUgQ0cwkqjKw==",
                            UserRoleId = new Guid("1a36152c-268a-4a9a-bb50-1a8f29119b8c"),
                            Username = "admin"
                        });
                });

            modelBuilder.Entity("task_management_system_backend.Models.Entities.Task", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier")
                        .HasColumnName("id");

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("code");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2")
                        .HasColumnName("created");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("description");

                    b.Property<decimal>("Estimated")
                        .HasColumnType("decimal(18,2)")
                        .HasColumnName("estimated");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("name");

                    b.Property<int>("Priority")
                        .HasColumnType("int")
                        .HasColumnName("priority");

                    b.Property<int>("Status")
                        .HasColumnType("int")
                        .HasColumnName("status");

                    b.Property<Guid?>("UserId")
                        .HasColumnType("uniqueidentifier")
                        .HasColumnName("user_id");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("task");
                });

            modelBuilder.Entity("task_management_system_backend.Models.Entities.UserRole", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier")
                        .HasColumnName("id");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)")
                        .HasColumnName("role_name");

                    b.HasKey("Id");

                    b.HasIndex("Name")
                        .IsUnique();

                    b.ToTable("user_roles");

                    b.HasData(
                        new
                        {
                            Id = new Guid("1a36152c-268a-4a9a-bb50-1a8f29119b8c"),
                            Name = "Admin"
                        },
                        new
                        {
                            Id = new Guid("7db3ddd3-c1aa-4f9f-b442-f229d21f80e2"),
                            Name = "Manager"
                        },
                        new
                        {
                            Id = new Guid("4a8dcd7c-df91-4bfc-b0c8-94d0b9e0e684"),
                            Name = "User"
                        });
                });

            modelBuilder.Entity("task_management_system_backend.Models.Entities.Account", b =>
                {
                    b.HasOne("task_management_system_backend.Models.Entities.UserRole", "UserRole")
                        .WithMany()
                        .HasForeignKey("UserRoleId");

                    b.Navigation("UserRole");
                });

            modelBuilder.Entity("task_management_system_backend.Models.Entities.Task", b =>
                {
                    b.HasOne("task_management_system_backend.Models.Entities.Account", "Account")
                        .WithMany()
                        .HasForeignKey("UserId");

                    b.Navigation("Account");
                });
#pragma warning restore 612, 618
        }
    }
}
