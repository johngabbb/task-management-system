using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using static task_management_system_backend.Models.Enums.TaskEnums;

namespace task_management_system_backend.Models.Entities
{
    [Table("task")]
    public class Task : Base
    {
        [Required]
        [Column("name")]
        public string Name { get; set; } = string.Empty;

        [Required]
        [Column("createdAt")]
        public DateTime CreatedAt { get; set; }

        [Required]
        [Column("status")]
        public Status Status { get; set; }

        [Required]
        [Column("priority")]
        public Priority Priority {  get; set; }

        [Required]
        [Column("estimated")]
        public decimal Estimated { get; set; } = 0;

        [Column("userId")]
        public Guid? UserId {  get; set; }

        [Column("projectId")]
        public Guid ProjectId {  get; set; }

        [ForeignKey("UserId")]
        public Account Account { get; set; } = null!;

        [ForeignKey("ProjectId")]
        public Project Project { get; set; } = null!;
    }
}
