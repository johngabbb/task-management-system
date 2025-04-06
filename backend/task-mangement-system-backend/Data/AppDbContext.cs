using Microsoft.EntityFrameworkCore;
using task_mangement_system_backend.Data.Models;

namespace task_mangement_system_backend.Data
{
    public class AppDbContext : DbContext
    {
        protected readonly IConfiguration Configuration;

        public AppDbContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to postgres with connection string from appsettings
            options.UseNpgsql(Configuration.GetConnectionString("ApiDbConnection"));
        }

        public DbSet<Account> Accounts { get; set; }
    }
}
