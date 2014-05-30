using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;

namespace BitBook.Repository.Entity
{
    class Post
    {
        public ObjectId Id { get; set; }
        public string Description { get; set; }
        public DateTime PostedTime { get; set; }
        public ObjectId PostedBy { get; set; }
    }
}
