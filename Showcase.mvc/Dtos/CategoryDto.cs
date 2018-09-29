using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Showcase.mvc.Models;

namespace Showcase.mvc.Dtos
{
    public class CategoryDto
    {
        [Key]
        public int Id { get; set; }
        public int Category_Id { get; set; }
        public string Description { get; set; }
        
    }
}