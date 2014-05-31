using System;
using System.Collections.Generic;
using System.Linq;
using BitBook.Repository.Entity;
using BitBook.Repository.Interfaces;
using MongoDB.Bson;
using MongoDB.Driver.Builders;

namespace BitBook.Repository.Repository
{
    public class PostRepository : GenericRepository<Post>, IPostRepository
    {
        public PostRepository(DataContext context)
            : base(context, TableNames.Post)
        {
        }

        public override void Delete(ObjectId id)
        {
            throw new NotImplementedException();
        }

        public override Post GetById(ObjectId id)
        {
            var query = Query<Post>.EQ(e => e.Id, id);
            return InitializeLists(Collection.Find(query).First());
        }

        public IEnumerable<Post> GetByUser(User user)
        {
            var query = Query<Post>.EQ(e => e.PostedBy, user.Id);
            return Collection.Find(query).AsEnumerable().OrderByDescending(p => p.PostedTime).Select(InitializeLists);
        }

        public IEnumerable<Post> GetAllSafely()
        {
            return GetAll().Select(InitializeLists);
        }

        private Post InitializeLists(Post post)
        {
            if (post.Likes == null) post.Likes = new List<string>();
            if(post.Comments==null) post.Comments = new List<Comment>();
            return post;
        }
    }
}
