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
        [Column("created")]
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

        [Column("user_id")]
        public Guid? UserId {  get; set; }

        [Required]
        [Column("sprint_id")]
        public Guid SprintId {  get; set; }

        [Required]
        [Column("project_id")]
        public Guid ProjectId {  get; set; }


        [ForeignKey(nameof(UserId))]
        public Account? Account { get; set; }

        [ForeignKey(nameof(SprintId))]
        public Sprint Sprint { get; set; } = null!;

        [ForeignKey(nameof(ProjectId))]
        public Project Project { get; set; } = null!;
    }
}
