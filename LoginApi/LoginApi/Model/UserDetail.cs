using System.ComponentModel.DataAnnotations;

namespace LoginApi.Model
{
    public class UserDetail
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string Confirm_Password {get; set;}
        [Required]
        public long MobileNumber { get; set;}

    }
}
