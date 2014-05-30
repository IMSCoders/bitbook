using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace BitBook.Repository.Entity
{
    public class User
    {
        [BsonId]
        public ObjectId Id { get; set; }
        [BsonElement]
        public string Name { get; set; }
        [BsonElement]
        public string Email { get; set; }
        [BsonElement]
        public string Password { get; set; }
        [BsonElement]
        public string PhotoPath { get; set; }
        [BsonElement]
        public bool IsLoggedIn { get; set; }
        [BsonElement]
        public bool IsDeleted { get; set; }
        [BsonElement]
        public List<ObjectId> Friends { get; set; }
    }
}
