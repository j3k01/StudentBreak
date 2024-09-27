using Microsoft.AspNetCore.Mvc;
using StudentBreak.Data.Models;
using StudentBreak.Data.Repositories;

namespace StudentBreak.Controllers
{
    [ApiController] 
    [Route("api/[controller]")]
    public class JourneyController(IJourneyRepository journeyRepository) : ControllerBase
    {
        private readonly IJourneyRepository _journeyRepository = journeyRepository ?? throw new ArgumentNullException(nameof(journeyRepository));

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Journey>>> GetJourney()
        {
            var journeys = await _journeyRepository.GetJourneysAsync();
            return Ok(journeys);
        }
    }
}
