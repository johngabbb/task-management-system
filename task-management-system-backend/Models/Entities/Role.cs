using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using task_management_system_backend.Models.Entities;

namespace task_management_system_backend.Models.Entities
{
    [Table("roles")]
    public class Role : Base
    {
        [Required]
        [Column("role")]
        public string Name { get; set; } = string.Empty;
    }
}
