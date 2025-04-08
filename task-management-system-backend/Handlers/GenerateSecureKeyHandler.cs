using System.Security.Cryptography;

namespace task_management_system_backend.Handlers
{
    public class GenerateSecureKeyHandler
    {
        public string GenerateSecureKey(int keySizeInBits = 256)
        {
            using (var rng = RandomNumberGenerator.Create())
            {
                byte[] keyBytes = new byte[keySizeInBits / 8];
                rng.GetBytes(keyBytes);
                return Convert.ToBase64String(keyBytes);
            }
        }
    }
}
