using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using BitBook.Repository;
using BitBook.Repository.Entity;
using BitBook.Repository.Interfaces;
using BitBook.Repository.Repository;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OAuth;
using BitBook.WebApi.Models;
using BitBook.WebApi.Providers;
using BitBook.WebApi.Results;
using MongoDB.AspNet.Identity;
using System.Web.Http.Cors;
using System.Configuration;
using MongoDB.Bson;
using BitBook.WebApi.HubClient;
namespace BitBook.WebApi.Controllers
{
    [Authorize]
    [RoutePrefix("api/Post")]
    [EnableCors(origins: "http://localhost:61406", headers: "*", methods: "*")]
    public class PostController : ApiController
    {
        private const string LocalLoginProvider = "Local";

        public IRepository<Post> _postRepository;

        public PostController()
        {
            this._postRepository = new PostRepository(new DataContext());
        }

        [OverrideAuthentication]
        //[HostAuthentication(DefaultAuthenticationTypes.ExternalCookie)]
        [AllowAnonymous]
        [Route("PostStatus")]
        public IHttpActionResult PostStatus(PostStatusBindingModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var post = new Post()
            {
                Description = model.Description,
                PostedBy = model.PostedBy,
                PostedTime = DateTime.Now
            };

          _postRepository.Add(post);
           return Ok();
            
        }

        [OverrideAuthentication]
        //[HostAuthentication(DefaultAuthenticationTypes.ExternalCookie)]
        [AllowAnonymous]
        [Route("GetPostById")]
        public async Task<IHttpActionResult> GetPostById(string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var post = _postRepository.GetById(id);

            //var hubClient = BitBookHubClient.ReturnInstance();
//            hubClient.SendNewPostToHome(post.)

            return Ok(post);
            
            
        }

        [Route("GetAllPosts")]
        [AllowAnonymous]
        public IHttpActionResult GetAllposts()
        {
            var posts = _postRepository.GetAll();
            return Ok(posts);
        }
    }
}
