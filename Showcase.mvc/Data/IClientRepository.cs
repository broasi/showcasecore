using System.Threading.Tasks;
using Showcase.mvc.Models;
using System.Collections.Generic;

namespace Showcase.mvc.Data
{
    public interface IClientRepository
    {
        Task<Client> AddClient(Client client, int[] category_Id);
        Task<Client> GetClient(int client_Id);
        Task<Client> GetClientByName(string clientName);
        void Delete<T>(T entity) where T: class;
        Task<IEnumerable<Client>> ListAllClients();
        Task<bool> ClientExists(string clientName);
        Task<bool> SaveAll();
    }
}