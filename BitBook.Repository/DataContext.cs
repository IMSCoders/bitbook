using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Driver;

namespace BitBook.Repository
{
    public class DataContext
    {
        public readonly MongoDatabase MongoDatabase;

        public DataContext()
        {
            var connectionString = new MongoConnectionStringBuilder(
                ConfigurationManager.AppSettings["MongoConnection"]);
            var databaseName = ConfigurationManager.AppSettings["MongoDbName"];
            var client = new MongoClient(connectionString.ConnectionString);
            var server = client.GetServer();
            MongoDatabase = server.GetDatabase(databaseName);
        }
    }
}
