using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
            var query = Query<User>.Matches(e => e.Name, new BsonRegularExpression(nameOrPartOfName));
            return Collection.Find(query).First();
        }

        public List<User> GetUsersByName(string nameOrPartOfName)
        {
            var query = Query<User>.Matches(e => e.Name, new BsonRegularExpression(nameOrPartOfName));
            return Collection.Find(query).ToList();
        }

        public User GetByEmail(string mailAddress)
        {
            var query = Query<User>.EQ(e => e.Email, mailAddress);
            return Collection.Find(query).First();
        }

        public override void Delete(ObjectId id)
        {
            throw new NotImplementedException();
        }

        public override User GetById(ObjectId id)
        {
            var query = Query<User>.EQ(e => e.Id, id);
            return Collection.Find(query).First();
        }

    }
}
