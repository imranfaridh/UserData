using LoginApi.Model;
using Microsoft.EntityFrameworkCore;

namespace LoginApi.Database
{
    public class UserDbContext : DbContext
    {
        public UserDbContext(DbContextOptions options) : base(options)
        {

        }
        //DbSet
        public DbSet<UserDetail> UserDetails { get; set; }
    }
}
