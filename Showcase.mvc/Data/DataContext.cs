using Showcase.mvc.Models;
using Microsoft.EntityFrameworkCore;

namespace Showcase.mvc.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}

        public DbSet<Client> Clients { get; set; }        
        public DbSet<ClientCategory> ClientCategories { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<User> Users { get; set; }
    }
}