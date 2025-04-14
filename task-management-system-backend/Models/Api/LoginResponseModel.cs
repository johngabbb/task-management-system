namespace task_management_system_backend.Models.Api
{
    public class LoginResponseModel
    {
        public Guid Id { get; set; }
        public string? AccessToken { get; set; }
        public string? Username { get; set; }
        public int ExpiresIn { get; set; }
        public string? Role { get; set; } 
        public string? Name { get; set; }
    }
}
