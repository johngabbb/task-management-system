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

        [HttpGet("getroles")]
        public async Task<ActionResult<List<UserRole>>> GetAllRoles()
        {
            return await _appDbContext.UserRoles.ToListAsync(); 
        }

        [HttpPost("assign")]
        public async Task<ActionResult> AssignRoleToUser(Guid userId, Guid roleId)
        {
            var user = await _appDbContext.Accounts.FirstOrDefaultAsync(x => x.Id == userId);
            if (user is null)
                return NotFound("User not found");

            var roleExist = await _appDbContext.UserRoles.AnyAsync(x => x.Id == roleId);
            if (!roleExist)
                return NotFound("Role does not exist");

            if (user.UserRoleId == roleId)
                return Ok("Role already assigned to user");

            user.UserRoleId = roleId;

            _appDbContext.Accounts.Update(user);
            await _appDbContext.SaveChangesAsync();

            return Ok("Role assgined successfully");
        }

        [HttpDelete("role/{roleId}")]
        public async Task<ActionResult> DeleteRole(Guid roleId)
        {
            var roleExist = await _appDbContext.UserRoles.FirstOrDefaultAsync(x => x.Id == roleId);

            if (roleExist is null) 
                return NotFound("Role does not exist");


            _appDbContext.UserRoles.Remove(roleExist);
            await _appDbContext.SaveChangesAsync();

            return Ok("Role removed succesfully");
        }

        [HttpDelete("user/{userId}/role/{roleId}")]
        public async Task<ActionResult> DeleteUserRoleFromUser(Guid userId, Guid roleId)
        {
            var userWithRoleExist = await _appDbContext.Accounts.FirstOrDefaultAsync(x => x.Id == userId && x.UserRoleId == roleId);

            if (userWithRoleExist is null)
                return NotFound("User does not have this role");


            _appDbContext.Accounts.Remove(userWithRoleExist);
            await _appDbContext.SaveChangesAsync();

            return Ok("Role removed from this user succesfully");
        }
    }
}
