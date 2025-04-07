using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using task_management_system_backend.Models.Api;
using task_mangement_system_backend.Data;
using task_mangement_system_backend.Models.Entities;

namespace task_management_system_backend.Services
{
    public class JwtService
    {
        private readonly AppDbContext _appDbContext;
        private readonly IConfiguration _configuration;
        private readonly PasswordHasher<Account> _passwordHasher;

        public JwtService(AppDbContext appDbContext, IConfiguration configuration, PasswordHasher<Account> passwordHasher)
        {
            _appDbContext = appDbContext;
            _configuration = configuration;
            _passwordHasher = passwordHasher;
        }

        public async Task<LoginResponseModel?> Authenticate(LoginRequestModel request)
        {
            if (string.IsNullOrWhiteSpace(request.Username) ||
                string.IsNullOrWhiteSpace(request.Password))
            {
                return null;
            }

            var userAccount = await _appDbContext.Accounts.FirstOrDefaultAsync(x => x.Username == request.Username);

            if (userAccount == null)
            {
                return null;
            }

            var verificationResult = _passwordHasher.VerifyHashedPassword(
                userAccount,
                userAccount.Password,
                request.Password
            );

            if (verificationResult == PasswordVerificationResult.Failed )
            {
                return null;
            }

            var issuer = _configuration["JwtConfig:Issuer"];
            var audience = _configuration["JwtConfig:Audience"];
            var key = _configuration["JwtConfig:Key"];
            var tokenValidityInMins = _configuration.GetValue<int>("JwtConfig:TokenValidityInMins");
            var tokenExpiriyTimeStamp = DateTime.UtcNow.AddMinutes(tokenValidityInMins);
            
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(JwtRegisteredClaimNames.Name, request.Username)
                }),
                Expires = tokenExpiriyTimeStamp,
                Issuer = issuer,
                Audience = audience,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.ASCII.GetBytes(key)),
                    SecurityAlgorithms.HmacSha256Signature)
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var securityToken = tokenHandler.CreateToken(tokenDescriptor);
            var accessToken = tokenHandler.WriteToken(securityToken);

            return new LoginResponseModel
            {
                AccessToken = accessToken,
                Username = userAccount.Username,
                ExpiresIn = (int)tokenExpiriyTimeStamp.Subtract(DateTime.UtcNow).TotalSeconds
            };
        }
    }
}
