using static task_management_system_backend.Models.Enums.TaskEnums;

namespace task_management_system_backend.Models.Api
{
    public class TaskResponseModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public Priority Priority { get; set; }
        public Status Status { get; set; }
        public decimal Estimated { get; set; }
        public Guid? UserId { get; set; }
        public string? AssignedUserName { get; set; }
        public Guid ProjectId { get; set; }
        public string ProjectName { get; set; } = string.Empty;
        public Guid? SprintId { get; set; }
        public string? SprintName { get; set; }
    }
}
