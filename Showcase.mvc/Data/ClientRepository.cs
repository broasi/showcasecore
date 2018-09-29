using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Showcase.mvc.Models;
using Showcase.mvc.Dtos;
using System.Collections.Generic;
using System.Linq;

namespace Showcase.mvc.Data
{
    public class ClientRepository : IClientRepository
    {
        private readonly DataContext _context;
        public ClientRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<Client> AddClient(Client client, int[] category_Id)
        {            
            int max = await _context.Clients.MaxAsync(p => p.Client_Id);
            client.Client_Id = max + 1;
            await _context.Clients.AddAsync(client);                      
            await _context.SaveChangesAsync();

            for (var i=0; i<=category_Id.Length-1; i++)
            {
                ClientCategory cl = new ClientCategory{
                Client_Id = client.Client_Id,
                Category_Id = category_Id[i]
            };
                await _context.ClientCategories.AddAsync(cl);                     
                await _context.SaveChangesAsync();
            }

            return client;
        }               
        
        public async Task<Client> GetClientByName(string clientName)
        {
            //var clientID = clientName.Substring(clientName.LastIndexOf('*')+2);
            var clientToReturn = await _context.Clients            
            .Include(ct => ct.ClientCategories)
            .FirstOrDefaultAsync(c => c.Name == clientName);

            return clientToReturn;
        }

        public async Task<Client> GetClient(int client_Id)
        {
            var clientToReturn = await _context.Clients            
            .Include(ct => ct.ClientCategories)
            .FirstOrDefaultAsync(c => c.Client_Id == client_Id);

            return clientToReturn;
        }
     
        public async Task<bool> ClientExists(string clientName)
        {
            if (await _context.Clients.AnyAsync(x => x.Name == clientName))
                return true;
                
            return false;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<IEnumerable<Client>> ListAllClients()
        {
            var clients = await _context.Clients.OrderBy(c=>c.Name).ToListAsync();
            return clients;
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }
    }
}