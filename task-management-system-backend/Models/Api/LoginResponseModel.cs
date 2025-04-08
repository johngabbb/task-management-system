namespace task_management_system_backend.Models.Api
{
    public class LoginResponseModel
    {
        public string? AccessToken { get; set; }
        public string? Username { get; set; }
        public int ExpiresIn { get; set; }
        public string? Role { get; set; } 
    }
}
