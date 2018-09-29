using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Showcase.mvc.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }
        public int Category_Id { get; set; }
        public string Description { get; set; }
        
        //[ForeignKey("Category_Id")]        
       // public List<ClientCategory> ClientCategories { get; set;}
    }
}