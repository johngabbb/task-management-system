using Microsoft.AspNetCore.Authorization;
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
        [Authorize]
        public async Task<ActionResult<object>> CreateTask([FromBody] TaskRequestModel request)
        {
            if (string.IsNullOrWhiteSpace(request.Name))
            {
                return BadRequest("Task name is required");
            }

            var user = await _appDbContext.Accounts.AnyAsync(x => x.Id == request.UserId);
            if (!user)
                return BadRequest("User does not exist");

            var lastTaskCode = await _appDbContext.Tasks
                .OrderByDescending(x => x.CreatedAt)
                .Select(x => x.Code)
                .FirstOrDefaultAsync();

            var task = new Task
            {
                Name = request.Name,
                Description = request.Description,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow,
                Priority = request.Priority,
                Status = request.Status,
                Estimated = request.Estimated,
                UserId = request.UserId
            };

            if (string.IsNullOrWhiteSpace(lastTaskCode))
            {
                task.Code = "TMS - 1";
            }
            else
            {
                var splitCode = lastTaskCode.Split("-");
                var numCode = Convert.ToInt32(splitCode[1].Trim());
                task.Code = $"TMS - {++numCode}";
            }

            await _appDbContext.Tasks.AddAsync(task);
            await _appDbContext.SaveChangesAsync();

            return Ok(task);
        }

        [HttpGet("getalltask")]
        [Authorize]
        public async Task<ActionResult<object>> GetAllTask()
        {
            return await _appDbContext.Tasks
                .Include(x => x.Account)
                .Select(x => new
                {
                    x.Name,
                    x.CreatedAt,
                    x.UpdatedAt,
                    status = x.Status.ToString(),
                    priority = x.Priority.ToString(),
                    x.Estimated,
                    x.Code,
                    x.Description,
                    Account = new
                    {
                        x.Account.Id,
                        x.Account.Name,
                        x.Account.Username,
                        role = x.Account.UserRole.Name,
                    }
                })
                .ToListAsync();
        }
    }
}
