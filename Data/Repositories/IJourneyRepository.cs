using StudentBreak.Data.Models;

namespace StudentBreak.Data.Repositories
{
    public interface IJourneyRepository
    {
        Task<IEnumerable<Journey>> GetJourneysAsync();
    }
}
