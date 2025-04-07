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
    }
}
