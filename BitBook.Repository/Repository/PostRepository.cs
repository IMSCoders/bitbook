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
    class PostRepository:GenericRepository<Post>,IPostRepository
    {
        public PostRepository(DataContext context) : base(context, TableNames.Post)
        {
        }

        public override void Delete(ObjectId id)
        {
            throw new NotImplementedException();
        }

        public override Post GetById(ObjectId id)
        {
            var query = Query<Post>.EQ(e => e.Id, id);
            return Collection.Find(query).First();
        }
    }
}
