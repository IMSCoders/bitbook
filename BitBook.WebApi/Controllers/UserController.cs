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
        public IHttpActionResult GetUser(string requester, string requested)
        {
            var requester_user = _userRepository.GetByName(requester);
            var requested_user = _userRepository.GetByName(requested);
            if (requested_user != null && requester_user != null) {
                requested_user.Requests.Add(requester_user.Id);
                _userRepository.Update(requested_user);
                return Ok();
            }
            else return
                BadRequest();
        }
    }
}
