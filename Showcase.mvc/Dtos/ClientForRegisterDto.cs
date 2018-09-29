using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Showcase.mvc.Models;

namespace Showcase.mvc.Dtos
{
    public class ClientForRegisterDto
    {
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
        public int[] Category_Id { get; set; } 
        public ICollection<ClientCategory> ClientCategories { get; set; }               
        
    }
}