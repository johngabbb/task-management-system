﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace task_management_system_backend.Models.Entities
{
    [Table("accounts")]
    public class Account : Base
    {
        [Required]
        [Column("fullname")]
        public string FullName { get; set; } = string.Empty;

        [Required]
        [Column("username")]
        public string Username { get; set; } = string.Empty;

        [Required]
        [Column("password")]
        public string Password { get; set; } = string.Empty;

        [Column("role")]
        public string Role { get; set; } = "User";
    }
}
