using System.ComponentModel.DataAnnotations;

namespace StudentBreak.Data.Models
{
    public class Journey
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(150)]
        public string Description { get; set; }
        public string Country { get; set; }
        public string Price { get; set; }
        public DateTime Date {  get; set; }
        public string Category { get; set; } //create Enum Category, change string => Enum!

    }
}
