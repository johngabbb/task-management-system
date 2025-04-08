using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using task_management_system_backend.Data;
using task_management_system_backend.Models.Entities;

namespace task_management_system_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserAccountController : ControllerBase
    {
        private readonly AppDbContext _dbContext;
        private readonly PasswordHasher<Account> _passwordHasher;

        public UserAccountController(AppDbContext dbCOntext, PasswordHasher<Account> passwordHasher)
        {
            _dbContext = dbCOntext;
            _passwordHasher = passwordHasher;
        }

        [HttpGet]
        public async Task<List<Account>> Get()
        {
            return await _dbContext.Accounts.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<Account?> GetById(Guid id)
        {
            return await _dbContext.Accounts.FirstOrDefaultAsync(a => a.Id == id);
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromBody] Account account)
        {
            if (string.IsNullOrWhiteSpace(account.Username) ||
                string.IsNullOrWhiteSpace(account.Password) ||
                string.IsNullOrWhiteSpace(account.FullName))
            {
                return BadRequest("Invalid Request");
            }

            account.Password = _passwordHasher.HashPassword(account, account.Password);

            await _dbContext.Accounts.AddAsync(account);
            await _dbContext.SaveChangesAsync();

            var userRoleId = new Guid("4a8dcd7c-df91-4bfc-b0c8-94d0b9e0e684"); // User role id
            var userRole = new UserRole
            {
                AccountId = account.Id,
                RoleId = userRoleId
            };

            await _dbContext.UserRoles.AddAsync(userRole);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = account.Id }, account);
        }

        [HttpPut]
        public async Task<ActionResult> Update([FromBody] Account account)
        {
            if (account.Id == Guid.Empty ||
                string.IsNullOrWhiteSpace(account.Username) ||
                string.IsNullOrWhiteSpace(account.Password) ||
                string.IsNullOrWhiteSpace(account.FullName))
            {
                return BadRequest("Invalid Request");
            }

            account.Password = _passwordHasher.HashPassword(account, account.Password);
            _dbContext.Accounts.Update(account);
            await _dbContext.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(Guid id)
        {
            var account = await GetById(id);
            if (account is null)
            {
                return NotFound();
            }

            _dbContext.Accounts.Remove(account);
            await _dbContext.SaveChangesAsync();

            return Ok();
        }
    }
}
