using Microsoft.EntityFrameworkCore;
using task_management_system_backend.Models.Entities;

namespace task_management_system_backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Account> Accounts { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Account>()
                .HasIndex(a => a.Username)
                .IsUnique();

            modelBuilder.Entity<Role>()
                .HasIndex(r => r.Name)
                .IsUnique();

            modelBuilder.Entity<Role>().HasData(
                new Role
                {
                    Id = new Guid("1a36152c-268a-4a9a-bb50-1a8f29119b8c"),
                    Name = "Admin"
                },
                new Role
                {
                    Id = new Guid("7db3ddd3-c1aa-4f9f-b442-f229d21f80e2"),
                    Name = "Manager"
                },
                new Role
                {
                    Id = new Guid("4a8dcd7c-df91-4bfc-b0c8-94d0b9e0e684"),
                    Name = "User"
                }
            );
        }
    }
}
