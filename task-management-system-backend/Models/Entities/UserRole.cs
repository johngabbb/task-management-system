using System.ComponentModel.DataAnnotations.Schema;
using task_management_system_backend.Models.Entities;

namespace task_management_system_backend.Models.Entities
{
    [Table("user_roles")]
    public class UserRole : Base
    {
        [Column("account_id")]
        public Guid AccountId { get; set; }

        [Column("role_id")]
        public Guid RoleId { get; set; }

        [ForeignKey("AccountId")]
        public Account Account { get; set; } = null!;

        [ForeignKey("RoleId")]
        public Role Role { get; set; } = null!;
    }
}
