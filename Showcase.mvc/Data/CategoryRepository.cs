using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Showcase.mvc.Models;
using System.Collections.Generic;
using System.Linq;

namespace Showcase.mvc.Data
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly DataContext _context;
        public CategoryRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<Category> AddCategory(Category category)
        {   
            int max = await _context.Categories.MaxAsync(p => p.Category_Id);
            category.Category_Id = max + 1;
            await _context.Categories.AddAsync(category);            
            await _context.SaveChangesAsync();

            return category;
        }
        
        public async Task<bool> CategoryExists(string categoryName)
        {
            if (await _context.Categories.AnyAsync(x => x.Description == categoryName))
                return true;
                
            return false;
        }

        public async Task<IEnumerable<Category>> ListCategories()
        {
            var categories = await _context.Categories.OrderBy(c=>c.Description).ToListAsync();
            return categories;
        }
    }
}