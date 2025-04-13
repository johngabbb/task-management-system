namespace task_management_system_backend.Models.Api
{
    public class SprintRequestModel
    {
        public string Name { get; set; } = string.Empty;
        public Guid ProjectId { get; set; } 
    }
}
