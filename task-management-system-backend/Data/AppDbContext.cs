using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using task_management_system_backend.Models.Entities;
using Task = task_management_system_backend.Models.Entities.Task;

namespace task_management_system_backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Account> Accounts { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<Task> Tasks { get; set; }  
        public DbSet<Sprint> Sprints {  get; set; }
        public DbSet<Project> Projects { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Account>()
                .HasIndex(a => a.Username)
                .IsUnique();

            modelBuilder.Entity<UserRole>()
                .HasIndex(r => r.Name)
                .IsUnique();

            modelBuilder.Entity<UserRole>().HasData(
                new UserRole
                {
                    Id = new Guid("1a36152c-268a-4a9a-bb50-1a8f29119b8c"),
                    Name = "Admin"
                },
                new UserRole
                {
                    Id = new Guid("7db3ddd3-c1aa-4f9f-b442-f229d21f80e2"),
                    Name = "Manager"
                },
                new UserRole
                {
                    Id = new Guid("4a8dcd7c-df91-4bfc-b0c8-94d0b9e0e684"),
                    Name = "User"
                }
            );

            modelBuilder.Entity<Account>().HasData(
                new Account
                {
                    Id = new Guid("8dd9e73e-217a-4208-a031-7ac5c9551215"),
                    Name = "System Administrator",
                    Username = "admin",
                    Password = "AQAAAAIAAYagAAAAEOgHEgRI4ayuckxnvZ4rBSJRYvLNtIGJviS19r1s28ZE/HADCBgbPpDUgQ0cwkqjKw==",
                    UserRoleId = new Guid("1a36152c-268a-4a9a-bb50-1a8f29119b8c")
                }
            );

            modelBuilder.Entity<Task>()
                .HasOne(t => t.Sprint)
                .WithMany()
                .HasForeignKey(t => t.SprintId)
                .OnDelete(DeleteBehavior.NoAction); // Prevent cascade delete cycle

            modelBuilder.Entity<Task>()
                .HasOne(t => t.Project)
                .WithMany()
                .HasForeignKey(t => t.ProjectId)
                .OnDelete(DeleteBehavior.NoAction); // Prevent cascade delete cycle
        }
    }
}
