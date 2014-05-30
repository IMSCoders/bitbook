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

            var users = new List<User>
                {
                    new User {Name = "Boot3", Id = new ObjectId("1234")}
                };

            AddUsers(users, userRepo);

            ShowAll(userRepo);

            users[0].Name = "boot2";

            userRepo.Update(users[0]);

            ShowAll(userRepo);

            Console.ReadKey();
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
                Console.Out.WriteLine("Id:{0}, Name:{1}", user.Id, user.Name);
            }
        }
    }
}
