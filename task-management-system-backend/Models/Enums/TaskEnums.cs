namespace task_management_system_backend.Models.Enums
{
    public class TaskEnums
    {
        public enum Status
        {
            Backlog,
            Pending,
            InProgress,
            QA,
            Completed
        }

        public enum Priority
        {
            Low = 1,
            Medium = 2,
            High = 3
        }
    }
}
