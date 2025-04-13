using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using task_management_system_backend.Data;
using task_management_system_backend.Models.Api;
using task_management_system_backend.Models.Entities;

namespace task_management_system_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;

        public ProjectController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpPost("create")]
        [Authorize]
        public async Task<ActionResult> CreateProject([FromBody] ProjectRequestModel request)
        {
            var projectExist = await _appDbContext.Projects.AnyAsync(x => x.Name == request.Name);
            if (projectExist)
                return BadRequest("Project already existing");

            var project = new Project
            {
                Name = request.Name,
                CreatedAt = DateTime.UtcNow
            };

            await _appDbContext.Projects.AddAsync(project);
            await _appDbContext.SaveChangesAsync();

            return Ok("Project Created");
        }
    }
}
