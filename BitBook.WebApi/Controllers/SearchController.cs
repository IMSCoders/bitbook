using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using BitBook.Repository.Repository;
using BitBook.Repository.Interfaces;
using BitBook.Repository;
using Microsoft.AspNet.Identity;
using BitBook.Repository.Entity;

namespace BitBook.WebApi.Controllers
{
    [Authorize]
    [RoutePrefix("api/Search")]
    [EnableCors(origins: "http://localhost:61406", headers: "*", methods: "*")]
    public class SearchController : ApiController
    {
        public UserRepository _userRepository;
        public SearchController()
        {

            _userRepository = new UserRepository(new DataContext());
        }

        [Route("GetUserByUserName")]
        public IHttpActionResult GetUser(string username)
        {
            var users = _userRepository.GetByName(username);
            if (users != null) return Ok();
            else return
                BadRequest();
        }
    }
}
