using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using task_mangement_system_backend.Data;
using task_mangement_system_backend.Models.Entities;

namespace task_mangement_system_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly AppDbContext _dbContext;

        public AccountController(AppDbContext dbCOntext)
        {
            _dbContext = dbCOntext;
        }

        [HttpGet]
        public async Task<List<Account>> Get()
        {
            return await _dbContext.Accounts.ToListAsync();
        }

        [HttpGet]
        public async Task<Account?> GetById(Guid id)
        {
            return await _dbContext.Accounts.FirstOrDefaultAsync(a => a.Id == id);
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromBody] Account account)
        {
            if (string.IsNullOrWhiteSpace(account.Username) ||
                string.IsNullOrWhiteSpace(account.Password) ||
                string.IsNullOrWhiteSpace(account.))
        }
    }
}
