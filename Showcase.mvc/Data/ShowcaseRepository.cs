using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Showcase.mvc.Dtos;

namespace Showcase.mvc.Data
{ 
    public class ShowcaseRepository  : IShowcaseRepository
    {
        private readonly DataContext _context;

        public ShowcaseRepository(DataContext context)
        {
            _context = context;
        }       

        public async Task<IEnumerable<ClientForCategoryDto>> ListClients()
        {
             var clients =  (from cc  in  _context.ClientCategories
                          join cl in _context.Clients on cc.Client_Id equals cl.Client_Id
                          join cat in _context.Categories on cc.Category_Id equals cat.Category_Id 
                          select new ClientForCategoryDto
                          {
                                Client_Id = cl.Client_Id,
                                Name = cl.Name,
                                Addr1 = cl.Addr1,
                                Addr2 = cl.Addr2,
                                City  = cl.City,
                                State = cl.State,
                                Zip = cl.Zip,
                                Tel = cl.Tel,
                                Email = cl.Email,
                                Url = cl.Url,
                                Freetxt = cl.Freetxt,
                                Blurb = cl.Blurb,
                                Created = cl.Created,                                
                                Category_Id = cat.Category_Id,
                                Description = cat.Description
                          })                                        
                          .OrderBy(c=>c.Description).ThenBy(j=>j.Name);                
            return await (clients.ToListAsync());                 
        }

        public async Task<IEnumerable<CategoryDto>> ListCategories()
        {
              var categories = (from cat  in _context.Categories       
                          join cc in _context.ClientCategories on cat.Category_Id equals cc.Category_Id                               
                          select new CategoryDto
                          {
                                Category_Id = cat.Category_Id,
                                Description = cat.Description
                          })                                         
                          .GroupBy(c => c.Category_Id)
                          .Select(g => g.First())
                          .OrderBy(g => g.Description)                         
                          .ToListAsync();
            return await categories;                 
        }

        public async Task<IEnumerable<ClientForCategoryDto>> ListClientsOnCategory(int Category_Id)
        {
              var clients = (from cc  in _context.ClientCategories
                          join cl in _context.Clients on cc.Client_Id equals cl.Client_Id
                          join cat in _context.Categories on cc.Category_Id equals cat.Category_Id 
                          where cat.Category_Id == Category_Id
                          select new ClientForCategoryDto
                          {
                                Client_Id = cl.Client_Id,
                                Name = cl.Name,
                                Addr1 = cl.Addr1,
                                Addr2 = cl.Addr2,
                                City  = cl.City,
                                State = cl.State,
                                Zip = cl.Zip,
                                Tel = cl.Tel,
                                Email = cl.Email,
                                Url = cl.Url,
                                Freetxt = cl.Freetxt,
                                Blurb = cl.Blurb,
                                Created = cl.Created,                                
                                Category_Id = cat.Category_Id,
                                Description = cat.Description
                          })                                         
                          .OrderBy(c=>c.Name).ToListAsync();
            return await clients;                 
        }
    }
}