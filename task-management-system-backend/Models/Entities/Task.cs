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
        [Column("code")]
        public string Code { get; set; } = string.Empty;

        [Required]
        [Column("created")]
        public DateTime CreatedAt { get; set; }

        [Required]
        [Column("updated")]
        public DateTime UpdatedAt { get; set; }

        [Required]
        [Column("status")]
        public Status Status { get; set; }

        [Required]
        [Column("priority")]
        public Priority Priority {  get; set; }

        [Required]
        [Column("estimated")]
        public decimal Estimated { get; set; } = 0;

        [Column("description")]
        public string Description { get; set; } = string.Empty;

        [Column("user_id")]
        public Guid? UserId {  get; set; }


        [ForeignKey(nameof(UserId))]
        public Account? Account { get; set; }
    }
}
