using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace task_management_system_backend.Models.Entities
{
    [Table("sprint")]
    public class Sprint : Base
    {
        [Required]
        [Column("name")]
        public string Name { get; set; } = string.Empty;

        [Required]
        [Column("created")]
        public DateTime CreatedAt {  get; set; }

        [Required]
        [Column("code")]
        public string Code { get; set; } = string.Empty;

        [Column("project_id")]
        public Guid ProjectId {  get; set; }


        [ForeignKey(nameof(ProjectId))]
        public Project Project { get; set; } = null!;
    }
}
