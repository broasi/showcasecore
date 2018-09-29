using System.Collections.Generic;
using Showcase.mvc.Dtos;
using System.Threading.Tasks;

namespace Showcase.mvc.Data
{
    public interface IShowcaseRepository
    {
        Task<IEnumerable<ClientForCategoryDto>> ListClients();
        Task<IEnumerable<CategoryDto>> ListCategories();
        Task<IEnumerable<ClientForCategoryDto>> ListClientsOnCategory(int Category_Id);
    }
}