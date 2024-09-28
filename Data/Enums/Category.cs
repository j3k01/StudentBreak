using System.ComponentModel.DataAnnotations;

namespace StudentBreak.Data.Enums
{
    public enum Category
    {
        Europa = 0,
        Azja = 1,
        Afryka = 2,
        Australia = 3,
        [Display(Name = "Ameryka Północna/Południowa")]
        AmerykaPolnocnaPoludniowa = 4,
    }
}
