using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using task_management_system_backend.Data;
using task_management_system_backend.Models.Entities;

namespace task_management_system_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin")]
    public class RoleController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;

        public RoleController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Role>>> GetAllRoles()
        {
            return await _appDbContext.Roles.ToListAsync(); 
        }

        [HttpPost("assign")]
        public async Task<ActionResult> AssignRoleToUser(Guid userId, Guid roleId)
        {
            var userExist = await _appDbContext.UserRoles.AnyAsync(x => x.AccountId == userId);
            if (!userExist)
                return NotFound("User not found");

            var roleExist = await _appDbContext.Roles.AnyAsync(x => x.Id == roleId);
            if (!roleExist)
                return NotFound("Role does not exist");

            var existingMapping = await _appDbContext.UserRoles.FirstOrDefaultAsync(x => x.AccountId == userId && x.RoleId == roleId);
            if (existingMapping is not null)
                return Ok("Role already assigned to user");

            var userRole = new UserRole
            {
                AccountId = userId,
                RoleId = roleId
            };

            await _appDbContext.UserRoles.AddAsync(userRole);
            await _appDbContext.SaveChangesAsync();

            return Ok("Role assgined successfully");
        }

        [HttpDelete("role/{roleId}")]
        public async Task<ActionResult> DeleteRole(Guid roleId)
        {
            var roleExist = await _appDbContext.Roles.FirstOrDefaultAsync(x => x.Id == roleId);

            if (roleExist is null) 
                return NotFound("Role does not exist");


            _appDbContext.Roles.Remove(roleExist);
            await _appDbContext.SaveChangesAsync();

            return Ok("Role removed succesfully");
        }

        [HttpDelete("user/{userId}/role/{roleId}")]
        public async Task<ActionResult> DeleteRoleFromUser(Guid userId, Guid roleId)
        {
            var userWithRoleExist = await _appDbContext.UserRoles.FirstOrDefaultAsync(x => x.AccountId == userId && x.RoleId == roleId);

            if (userWithRoleExist is null)
                return NotFound("User does not have this role");


            _appDbContext.UserRoles.Remove(userWithRoleExist);
            await _appDbContext.SaveChangesAsync();

            return Ok("Role removed from this user succesfully");
        }

        [HttpGet("user/{userId}")]
        public async Task<ActionResult<Role>> GetUserRole(Guid userId)
        {
            var userDetails = await _appDbContext.Accounts.FirstOrDefaultAsync(x => x.Id == userId);

            if (userDetails is null)
            {
                return NotFound("User not found");
            }

            return Ok(userDetails.Role);
        }
    }
}
