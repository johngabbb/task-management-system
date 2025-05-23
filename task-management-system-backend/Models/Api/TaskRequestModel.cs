﻿using static task_management_system_backend.Models.Enums.TaskEnums;

namespace task_management_system_backend.Models.Api
{
    public class TaskRequestModel
    {
        public string Name { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public Priority Priority { get; set; } = Priority.Low;
        public Status Status { get; set; } = Status.Backlog;
        public Guid UserId { get; set; }
        public decimal Estimated { get; set; } = 0;
        public string Description { get; set; } = string.Empty;
        public string Code { get; set; } = string.Empty;
    }
}
