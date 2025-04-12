using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using task_management_system_backend.Data;

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
        public async Task<ActionResult> CreateTask()
        {


            return Ok();
        }
    }
}
