using static task_management_system_backend.Models.Enums.TaskEnums;

namespace task_management_system_backend.Models.Api
{
    public class TaskModel
    {
        public string Name { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public Priority Priority {  get; set; }
        public Status Status { get; set; }
        public string AssignedTo { get; set; } = string.Empty;
        public string Project { get; set; } = string.Empty;
        public decimal Estimated { get; set; } = 0;
    }
}
