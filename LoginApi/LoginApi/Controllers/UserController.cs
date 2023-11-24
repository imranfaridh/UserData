using LoginApi.Database;
using LoginApi.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LoginApi.Controllers
{
    [Route("api/User")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserDbContext _userDbContext;

        public UserController(UserDbContext _userDbContext)
        {
            this._userDbContext = _userDbContext;
        }

        // CREATE
        [HttpPost("save")]
        public ActionResult<UserDetail> createDetail([FromBody] UserDetail userDetail)
        {
            _userDbContext.UserDetails.Add(userDetail);
            _userDbContext.SaveChanges();
            return Ok();
        }

        //getbyid
        [HttpGet("get/{id:int}")]
        public ActionResult<UserDetail> getById(int id)
        {
            var user = _userDbContext.UserDetails.Find(id);
            if (id != 0)
            {
                if (user != null)
                {
                    return Ok(user);
                }
                else
                {
                    return NoContent();
                }
            }
            else
            {
                return BadRequest();
            }
        }

        //getAll
        [HttpGet("getAll")]
        public ActionResult<List<UserDetail>> GetAllUser()
        {
            var users = _userDbContext.UserDetails.ToList();
            return Ok(users);
        }

        //update
        [HttpPut("update/{id:int}")]
        public ActionResult<UserDetail> UpdateUser(int id, [FromBody] UserDetail user)
        {
            var user_ = _userDbContext.UserDetails.Find(id);
            if (id != 0)
            {
                if (user_ != null)
                {
                    user_.Name = user.Name;
                    user_.Email = user.Email;
                    user_.Password = user.Password;
                    user_.Confirm_Password = user.Confirm_Password;
                    user_.MobileNumber = user.MobileNumber;
                    _userDbContext.SaveChanges();
                    return Ok(user_);
                }
                else
                {
                    return NoContent();
                }

            }
            else { return BadRequest(); }

        }

        //delete
        [HttpDelete("delete/{id:int}")]
        public ActionResult<string> deleteUser(int id)
        {
            var user = _userDbContext.UserDetails.Find(id);
            if (user != null)
            {
                _userDbContext.UserDetails.Remove(user);
                _userDbContext.SaveChanges();
                return NoContent();
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
    

