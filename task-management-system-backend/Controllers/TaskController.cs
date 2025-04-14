using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using task_management_system_backend.Data;
using task_management_system_backend.Models.Api;
using Task = task_management_system_backend.Models.Entities.Task;

namespace task_management_system_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;

        public TaskController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpPost("createtask")]
        public async Task<ActionResult> CreateTask([FromBody] TaskRequestModel request)
        {
            if (string.IsNullOrWhiteSpace(request.Name))
            {
                return BadRequest("Task name is required");
            }

            var user = await _appDbContext.Accounts.FirstOrDefaultAsync(x => x.Id == request.UserId);
            if (user is null)
                return BadRequest("User does not exist");

            var task = new Task
            {
                Name = request.Name,
                Description = request.Description,
                CreatedAt = DateTime.UtcNow,
                Priority = request.Priority,
                Status = request.Status,
                Estimated = request.Estimated,
                UserId = request.UserId,
            };

            await _appDbContext.Tasks.AddAsync(task);
            await _appDbContext.SaveChangesAsync();

            return Ok(task);
        }
    }
}
