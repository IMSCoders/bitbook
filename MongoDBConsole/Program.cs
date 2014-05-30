using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BitBook.Repository;

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
                    //new User {Id = 2304, Name = "MIT"},
                    //new User {Id = 2305, Name = "Adib"},
                    //new User {Id = 2306, Name = "AMIT"},
                    new User {Id = 2308, Name = "Boot"}
                };

            AddUsers(users, userRepo);

            ShowAll(userRepo);

            Console.ReadKey();
        }

        private static void AddUsers(List<User> users, UserRepository userRepo)
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
