using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace BitBook.Repository.Entity
{
    public class Post
    {
        [BsonId]
        public ObjectId Id { get; set; }
        [BsonElement]
        public string Description { get; set; }
        [BsonElement]
        public DateTime PostedTime { get; set; }
        [BsonElement]
        public ObjectId PostedBy { get; set; }
        [BsonElement]
        public bool IsDeleted { get; set; }

    }
}
