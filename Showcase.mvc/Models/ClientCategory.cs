using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Showcase.mvc.Models
{
    public class ClientCategory
    {
         public int Id { get; set; }         
         
         public int Category_Id { get; set; }         
         public int Client_Id { get; set; }


        //  [ForeignKey("Category_Id")]
        //  public Category Categories { get; set; }
         //[ForeignKey("Client_Id")]
          //public Client Clients { get; set; }

        //public ICollection<Client> Clients { get; set;}
//         public ICollection<Category> Categories { get; set;}

        //public Client Clients { get; set; }
        //  public ClientCategory()
        //  {
        //     Client = new Collection<Client>();
        //     Categories = new Collection<Category>();
        //  }

    }
}