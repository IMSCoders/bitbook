using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BitBook.Repository.Entity;
using MongoDB.Bson;

namespace BitBook.Repository.Interfaces
{
    interface IPostRepository
    {
        IEnumerable<Post> GetByUser(User user);
        IEnumerable<Post> GetAllSafely();
    }
}
