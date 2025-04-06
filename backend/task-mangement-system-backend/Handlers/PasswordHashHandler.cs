using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System;
using System.Security.Cryptography;

namespace task_mangement_system_backend.Handlers
{
    public class PasswordHashHandler
    {
        private static readonly int _iterationCount = 10000;
        private static readonly RandomNumberGenerator _randomNumberGenerator = RandomNumberGenerator.Create();

        public static string HashPassword(string password)
        {
            // Generate a random salt
            int saltSize = 16;
            var salt = new byte[saltSize];
            _randomNumberGenerator.GetBytes(salt);

            // Generate the hash using PBKDF2
            var subKey = KeyDerivation.Pbkdf2(password, salt, KeyDerivationPrf.HMACSHA256, _iterationCount, 256 / 8);

            // Create output byte array (total size = 13 + salt.Length + hash.Length)
            var outputBytes = new byte[13 + salt.Length + subKey.Length];

            // Format marker
            outputBytes[0] = 0x01;

            // Include the hashing parameters in the output
            WriteNetworkByteOrder(outputBytes, 1, (uint)KeyDerivationPrf.HMACSHA256);
            WriteNetworkByteOrder(outputBytes, 5, (uint)_iterationCount);
            WriteNetworkByteOrder(outputBytes, 9, (uint)saltSize);

            // Copy salt and hash to the output
            Buffer.BlockCopy(salt, 0, outputBytes, 13, salt.Length);
            Buffer.BlockCopy(subKey, 0, outputBytes, 13 + salt.Length, subKey.Length);

            // Convert to base64 string for storage
            return Convert.ToBase64String(outputBytes);
        }

        public static bool VerifyPassword(string hashedPassword, string providedPassword)
        {
            // Convert from base64 string
            byte[] decodedHashedPassword = Convert.FromBase64String(hashedPassword);

            // Verify the format marker
            if (decodedHashedPassword.Length == 0 || decodedHashedPassword[0] != 0x01)
            {
                return false;
            }

            // Read the hashing parameters
            int prf = (int)ReadNetworkByteOrder(decodedHashedPassword, 1);
            int iterCount = (int)ReadNetworkByteOrder(decodedHashedPassword, 5);
            int saltLength = (int)ReadNetworkByteOrder(decodedHashedPassword, 9);

            // Verify the parameters
            if (prf != (int)KeyDerivationPrf.HMACSHA256 || iterCount < 1 || saltLength < 1)
            {
                return false;
            }

            // Calculate the expected lengths
            int expectedHashLength = decodedHashedPassword.Length - 13 - saltLength;
            if (expectedHashLength < 1)
            {
                return false;
            }

            // Extract the salt
            byte[] salt = new byte[saltLength];
            Buffer.BlockCopy(decodedHashedPassword, 13, salt, 0, saltLength);

            // Extract the hash
            byte[] expectedHash = new byte[expectedHashLength];
            Buffer.BlockCopy(decodedHashedPassword, 13 + saltLength, expectedHash, 0, expectedHashLength);

            // Hash the provided password using the same parameters
            byte[] actualHash = KeyDerivation.Pbkdf2(
                password: providedPassword,
                salt: salt,
                prf: (KeyDerivationPrf)prf,
                iterationCount: iterCount,
                numBytesRequested: expectedHashLength);

            // Compare the hashes in time-constant manner
            return CryptographicOperations.FixedTimeEquals(expectedHash, actualHash);
        }

        // Helper methods to handle network-byte-order conversion
        private static void WriteNetworkByteOrder(byte[] buffer, int offset, uint value)
        {
            buffer[offset + 0] = (byte)(value >> 24);
            buffer[offset + 1] = (byte)(value >> 16);
            buffer[offset + 2] = (byte)(value >> 8);
            buffer[offset + 3] = (byte)(value);
        }

        private static uint ReadNetworkByteOrder(byte[] buffer, int offset)
        {
            return ((uint)buffer[offset + 0] << 24)
                | ((uint)buffer[offset + 1] << 16)
                | ((uint)buffer[offset + 2] << 8)
                | ((uint)buffer[offset + 3]);
        }
    }
}