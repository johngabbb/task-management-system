using System.ComponentModel.DataAnnotations.Schema;
using task_management_system_backend.Models.Entities;

namespace task_management_system_backend.Models.Entities
{
    [Table("user_roles")]
    public class UserRole : Base
    {
        [Column("role_name")]
        public string Name { get; set; } = string.Empty;
    }
}
