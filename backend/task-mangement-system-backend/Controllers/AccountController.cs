﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using task_mangement_system_backend.Data;
using task_mangement_system_backend.Handlers;
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

            account.Password = PasswordHashHandler.HashPassword(account.Password);

            await _dbContext.Accounts.AddAsync(account);
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

            account.Password = PasswordHashHandler.HashPassword(account.Password);
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
