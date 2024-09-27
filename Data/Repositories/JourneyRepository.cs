using Microsoft.EntityFrameworkCore;
using StudentBreak.Data.Models;

namespace StudentBreak.Data.Repositories
{
    public class JourneyRepository(StudentBreakDbContext context) : IJourneyRepository
    {
        private readonly StudentBreakDbContext _context = context ?? throw new ArgumentNullException(nameof(context));

        public async Task<IEnumerable<Journey>> GetJourneysAsync()
        {
            return await _context.Journeys.OrderBy(c => c.Id).ToListAsync();
        }
    }
}
