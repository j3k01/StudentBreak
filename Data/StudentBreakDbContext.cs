using Microsoft.EntityFrameworkCore;
using StudentBreak.Data.Models;

namespace StudentBreak.Data
{
    public class StudentBreakDbContext : DbContext
    {
        public DbSet<Journey> Journeys { get; set; }

        public StudentBreakDbContext(DbContextOptions<StudentBreakDbContext> options) : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Journey>(entity =>
            {
                entity.HasKey(c => c.Id);
                entity.Property(c => c.Description).IsRequired();
            });
        }
    }
}
