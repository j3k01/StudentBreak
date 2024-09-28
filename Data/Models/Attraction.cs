using System.ComponentModel.DataAnnotations;

namespace StudentBreak.Data.Models
{
    public class Attraction
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Price { get; set; }
        public string Location { get; set; }
        public string RequiredTime { get; set; }
        public string Description {  get; set; }
        public string ImageName { get; set; }

    }
}
