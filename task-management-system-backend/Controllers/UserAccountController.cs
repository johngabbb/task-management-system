using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using task_management_system_backend.Data;
using task_management_system_backend.Models.Api;
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

        [HttpGet("getusers")]
        [Authorize]
        public async Task<ActionResult<IEnumerable<object>>> GetUsers()
        {
            var users = await _dbContext.Accounts
                .Include(x => x.UserRole)
                .Select(x => new
                {
                    x.Id,
                    x.Name,
                    x.Username,
                    Role = x.UserRole.Name,
                })
                .ToListAsync();

            return Ok(users);
        }

        [HttpGet("getbyid/{id}")]
        public async Task<Account?> GetById(Guid id)
        {
            return await _dbContext.Accounts.FirstOrDefaultAsync(a => a.Id == id);
        }

        [HttpGet("existinguser")]
        public async Task<bool> CheckExistingUser(string username)
        {
            return await _dbContext.Accounts.AnyAsync(x => x.Username == username);
        }

        [HttpPost("create")]
        public async Task<ActionResult> Create([FromBody] CreateAccountRequestModel account)
        {
            if (string.IsNullOrWhiteSpace(account.Username) || 
                string.IsNullOrWhiteSpace(account.Password) ||
                string.IsNullOrWhiteSpace(account.Name))
            {
                return BadRequest("Invalid Request");
            }

            var usernameExist = await _dbContext.Accounts.AnyAsync(x => x.Username == account.Username);
            if (usernameExist)
                return BadRequest("Email already taken");

            var newAccount = new Account
            {
                Name = account.Name,
                Username = account.Username,
                UserRoleId = new Guid("4a8dcd7c-df91-4bfc-b0c8-94d0b9e0e684"),   // default user role 
            };

            newAccount.Password = _passwordHasher.HashPassword(newAccount, account.Password);

            await _dbContext.Accounts.AddAsync(newAccount);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = newAccount.Id }, account);
        }

        [HttpPut("update")]
        public async Task<ActionResult> Update([FromBody] Account account)
        {
            if (account.Id == Guid.Empty ||
                string.IsNullOrWhiteSpace(account.Username) ||
                string.IsNullOrWhiteSpace(account.Password) ||
                string.IsNullOrWhiteSpace(account.Name))
            {
                return BadRequest("Invalid Request");
            }

            account.Password = _passwordHasher.HashPassword(account, account.Password);
            _dbContext.Accounts.Update(account);
            await _dbContext.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("delete/{id}")]
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
