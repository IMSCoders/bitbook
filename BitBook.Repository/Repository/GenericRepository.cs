using System.Collections.Generic;
using BitBook.Repository.Interfaces;
using MongoDB.Bson;
using MongoDB.Driver;

namespace BitBook.Repository.Repository
{
    public abstract class GenericRepository<T> : IRepository<T> where T : class
    {
        protected readonly MongoCollection<T> Collection;

        protected GenericRepository(DataContext context, string tableName)
        {
            Collection = context.MongoDatabase.GetCollection<T>(tableName);
        }

        public void Add(T entity)
        {
            Collection.Insert(entity);
        }

        public IEnumerable<T> GetAll()
        {
            return Collection.FindAll();
        }

        public void Update(T entity)
        {
            Collection.Save(entity);
        }

        public void Save()
        {
            foreach (var entity in Collection.FindAll())
            {
                Collection.Save(entity);
            }
        }

        public abstract void Delete(ObjectId id);

        public abstract T GetById(string id);

    }
}
