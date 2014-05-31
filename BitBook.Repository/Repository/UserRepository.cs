using System;
using System.Collections.Generic;
using System.Linq;
using BitBook.Repository.Entity;
using BitBook.Repository.Interfaces;
using MongoDB.Bson;
using MongoDB.Driver.Builders;

namespace BitBook.Repository.Repository
{
    public class UserRepository : GenericRepository<User>, IUserRepository
    {
        public UserRepository(DataContext context)
            : base(context, TableNames.User)
        {
        }

        public User GetByName(string nameOrPartOfName)
        {
            var query = Query<User>.Matches(e => e.UserName, new BsonRegularExpression(nameOrPartOfName));
            return InitializeLists(Collection.Find(query).FirstOrDefault());
        }

        public IEnumerable<User> GetAllSafely()
        {
            return GetAll().Select(InitializeLists);
        }

        public IEnumerable<User> GetUsersByName(string nameOrPartOfName)
        {
            var query = Query<User>.Matches(e => e.UserName, new BsonRegularExpression(nameOrPartOfName));
            return Collection.Find(query).ToList().Select(InitializeLists);
        }

        public User GetByEmail(string mailAddress)
        {
            var query = Query<User>.EQ(e => e.Email, mailAddress);
            return InitializeLists(Collection.Find(query).First());
        }

        public IEnumerable<string> GetCommonFriends(User userOne, User userTwo)
        {
            var commonFriendIds = userOne.Friends.Intersect(userTwo.Friends);

            foreach (var friendId in commonFriendIds)
            {
                var query = Query<User>.EQ(e => e.Id, friendId);
                yield return Collection.FindOne(query).UserName;
            }
        }

        public override void Delete(ObjectId id)
        {
            throw new NotImplementedException();
        }

        public override User GetById(string id)
        {
            var query = Query<User>.EQ(e => e.Id, id.ToString());
            return InitializeLists(Collection.Find(query).First());
        }

        private User InitializeLists(User user)
        {
            if (user.Friends == null) user.Friends = new List<string>();
            if (user.Requests == null) user.Requests = new List<string>();
            return user;
        }

        public void AddFriend(User userOne, User userTwo)
        {
            userOne.Requests.Add(userTwo.Id);
        }

        //public void AcceptFriend(User )

    }
}
