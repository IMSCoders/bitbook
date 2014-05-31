using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BitBook.Repository;
using BitBook.Repository.Entity;
using BitBook.Repository.Repository;
using MongoDB.Bson;

namespace MongoDBConsole
{
    class Program
    {
        private static void Main(string[] args)
        {
            var ctx = new DataContext();
            var userRepo = new UserRepository(ctx);
            var postRepo = new PostRepository(ctx);

            //ShowAll(userRepo);
            //LikeFriend(userRepo);
            ShowAll(userRepo);
            //PostStatus(userRepo, postRepo, "amit", "Ami Bhalo asi.......'_'");
            ShowAllPosts(postRepo);

            Console.ReadKey();
        }

        private static void ShowAllPosts(PostRepository postRepo)
        {
            foreach (var post in postRepo.GetAllSafely())
            {
                Console.Out.WriteLine("PostedBy:{0} Descr:{1}", post.PostedBy, post.Description);
                Console.Out.WriteLine("Likes:{0}", post.Likes.Count);
                foreach (var comment in post.Comments)
                {
                    Console.Out.WriteLine("Id:{0} Comment:{1}", comment.PostedBy, comment.Description);
                }
            }
        }

        private static void PostStatus(UserRepository userRepo, PostRepository postRepo, string userName, string message)
        {
            var user = userRepo.GetByName(userName);
            var post = new Post {Description = message, PostedBy = user.Id, PostedTime = DateTime.Now};
            postRepo.Add(post);
        }

        private static void LikeFriend(UserRepository userRepo)
        {
            var userAmit = userRepo.GetByName("amit");
            foreach (var user in userRepo.GetUsersByName("amit"))
            {
                if (user.Id == userAmit.Id) continue;
                userAmit.Friends.Add(user.Id);
            }
            userRepo.Update(userAmit);
        }

        private static void AddUsers(IEnumerable<User> users, UserRepository userRepo)
        {
            foreach (var user in users)
            {
                userRepo.Add(user);
            }
        }

        private static void ShowAll(UserRepository userRepo)
        {
            foreach (var user in userRepo.GetAll())
            {
                Console.Out.WriteLine("Id:{0}, Name:{1}", user.Id, user.UserName);
                if (user.Friends == null) return;
                foreach (var friendId in user.Friends)
                {
                    Console.Out.WriteLine("Friend: {0}", userRepo.GetById(friendId).UserName);
                }
            }
        }
    }
}
