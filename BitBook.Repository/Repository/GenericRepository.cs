using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BitBook.Repository.Interfaces;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using MongoDB.Driver.Linq;

namespace BitBook.Repository.Repository
{
    public abstract class GenericRepository<T> : IRepository<T> where T : class
    {
        private readonly DataContext _context;
        protected readonly MongoCollection<T> Collection;

        protected GenericRepository(DataContext context, string tableName)
        {
            _context = context;
            Collection = _context.MongoDatabase.GetCollection<T>(tableName);
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

        public abstract T GetById(ObjectId id);

    }
}
