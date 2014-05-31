using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson.Serialization.Attributes;

namespace BitBook.Repository.Entity
{
    public class Comment
    {
        [BsonElement]
        public string PostedBy { get; set; }
        [BsonElement]
        public string Description { get; set; }
        [BsonElement]
        public DateTime PostedTime { get; set; }
    }
}
