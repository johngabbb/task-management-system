using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace task_management_system_backend.Models.Entities
{
    [Table("project")]
    public class Project : Base
    {
        [Required]
        [Column("name")]
        public string Name { get; set; } = string.Empty;

        [Required]
        [Column("created")]
        public DateTime CreatedAt {  get; set; }
    }
}
