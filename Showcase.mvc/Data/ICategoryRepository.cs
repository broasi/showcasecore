using System.Threading.Tasks;
using Showcase.mvc.Models;
using System.Collections.Generic;

namespace Showcase.mvc.Data
{
    public interface ICategoryRepository
    {
        Task<Category> AddCategory(Category category);
        Task<bool> CategoryExists(string categoryName);
        Task<IEnumerable<Category>> ListCategories();
    }
}