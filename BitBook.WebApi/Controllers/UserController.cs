using BitBook.Repository;
using BitBook.Repository.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace BitBook.WebApi.Controllers
{
    [Authorize]
    [RoutePrefix("api/User")]
    [EnableCors(origins: "http://localhost:61406", headers: "*", methods: "*")]
    public class UserController : ApiController
    {
        public UserRepository _userRepository;
        public UserController()
        {

            _userRepository = new UserRepository(new DataContext());
        }
        [Route("AddRequest")]
        [AllowAnonymous]
        public IHttpActionResult AddRequest(string requester, string requested)
        {
            var requester_user = _userRepository.GetByName(requester);
            var requested_user = _userRepository.GetByName(requested);
            if (requested_user != null && requester_user != null)
            {
                if (requested_user.Requests.Contains(requester_user.Id)) return BadRequest();
                requested_user.Requests.Add(requester_user.Id);
                _userRepository.Update(requested_user);
                return Ok();
            }
            else return
                BadRequest();
        }

        [Route("PendingRequests")]
        [AllowAnonymous]
        public IHttpActionResult GetPendingRequests(string currentuserName)
        {
            var user = _userRepository.GetByName(currentuserName);
            if (user == null) return BadRequest();
            List<string> usernames = new List<string>();
            foreach (string userid in user.Requests)
            {
                usernames.Add(_userRepository.GetById(userid).UserName);
            }
            return Ok(usernames);


        }


        [Route("FindUserByName")]
        [AllowAnonymous]

        public IHttpActionResult FindUserByUserName(string userName)
        {
            var user = _userRepository.GetByName(userName);
            if (user == null) return BadRequest();
            else return Ok(user);
        }

        public IHttpActionResult AcceptFriendRequest(string currentUserName, string requestername, Boolean isAccepted)
        {
            return Ok();
        }
    }
}
