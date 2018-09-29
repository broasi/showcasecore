using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Showcase.mvc.Dtos
{
    public class ClientForCategoryDto
    {
        public int Id { get; set; }        
        public int Client_Id { get; set; }        
        public string Name { get; set; } 
        public string Addr1 { get; set; }
        public string Addr2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public string Tel { get; set; }
        public string Email { get; set; }
        public string Url { get; set; }
        public string Freetxt { get; set; }
        public string Blurb { get; set; }
        public string Created { get; set; }         
        public int Category_Id { get; set; }                 
        public string Description { get; set; }
        
       // public ICollection<ClientCategoryDto> ClientCategories { get; set;}

        // public ClientForCategoryDto()
        // {
        //     ClientCategories = new Collection<ClientCategoryDto>();
        // }

    }
}