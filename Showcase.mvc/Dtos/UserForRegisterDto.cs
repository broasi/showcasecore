using System;
using System.ComponentModel.DataAnnotations;

namespace Showcase.mvc.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }        
        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must specify a password between 4 and 8 characters")]
        public string Password { get; set; }        
        public string Firstname { get; set; } 
        public string Lastname { get; set; }        
        
    }
}