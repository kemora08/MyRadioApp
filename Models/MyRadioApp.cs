using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace capstone.Models
{
    public class MyRadioApp
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }
        public string Frequency { get; set; }
        public string CallSign { get; set; }
        public string Genre { get; set; }
        public int Rating { get; set; }
        public string Review { get; set; }
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }
    }
}
