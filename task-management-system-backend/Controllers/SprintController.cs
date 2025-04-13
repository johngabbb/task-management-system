using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using task_management_system_backend.Data;
using task_management_system_backend.Handlers;
using task_management_system_backend.Models.Api;
using task_management_system_backend.Models.Entities;

namespace task_management_system_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SprintController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;

        public SprintController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpPost("create")]
        [Authorize]
        public async Task<ActionResult> CreateSprint([FromBody] SprintRequestModel request)
        {
            var project = await _appDbContext.Projects.FirstOrDefaultAsync(x => x.Id == request.ProjectId);
            if (project is null)
                return BadRequest("Project does not exist");

            var sprintExist = await _appDbContext.Sprints.AnyAsync(x => x.Name == request.Name);
            if (sprintExist)
                return BadRequest("Sprint already existing");

            var sprint = new Sprint
            {
                Name = request.Name,
                CreatedAt = DateTime.UtcNow,
                ProjectId = request.ProjectId,
                Code = GenerateSprintCodeHandler.GenerateCode(project.Name),
            };

            await _appDbContext.Sprints.AddAsync(sprint);
            await _appDbContext.SaveChangesAsync();

            return Ok("Sprint created");
        }
    }
}
