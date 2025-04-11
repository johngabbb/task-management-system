using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace task_management_system_backend.Models.Entities
{
    [Table("accounts")]
    public class Account : Base
    {
        [Required]
        [Column("name")]
        public string Name { get; set; } = string.Empty;

        [Required]
        [Column("username")]
        public string Username { get; set; } = string.Empty;

        [Required]
        [Column("password")]
        public string Password { get; set; } = string.Empty;

        [Required]
        [Column("role_id")]
        public Guid UserRoleId { get; set; }

        [ForeignKey("RoleId")]
        public UserRole UserRole { get; set; } = null!;
    }
}
