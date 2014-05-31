using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BitBook.Repository.Entity;
using MongoDB.Bson.Serialization;
using MongoDB.Driver;

namespace BitBook.Repository
{
    public class DataContext
    {
        public readonly MongoDatabase MongoDatabase;

        public DataContext()
        {
            var connectionString = new MongoConnectionStringBuilder(
                ConfigurationManager.ConnectionStrings["MongoConnection"].ConnectionString);
            var databaseName = ConfigurationManager.AppSettings["MongoDbName"];
            var client = new MongoClient(connectionString.ConnectionString);
            var server = client.GetServer();
            MongoDatabase = server.GetDatabase(databaseName);

            InitializeMapping();
        }

        private static void InitializeMapping()
        {
            BsonClassMap.RegisterClassMap<User>(um =>
                {
                    um.AutoMap();
                    um.GetMemberMap(u => u.Friends)
                      .SetDefaultValue(new List<string>());
                });
            BsonClassMap.RegisterClassMap<Post>(pm =>
                {
                    pm.AutoMap();
                    pm.GetMemberMap(p => p.Likes).SetDefaultValue(new List<string>());
                    pm.GetMemberMap(p => p.Comments).SetDefaultValue(new List<Comment>());
                });
        }
    }
}
