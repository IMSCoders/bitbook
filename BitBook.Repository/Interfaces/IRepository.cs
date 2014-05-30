using System.Collections.Generic;
using MongoDB.Bson;

namespace BitBook.Repository.Interfaces
{
    public interface IRepository<TEntity> where TEntity : class
    {
        void Add(TEntity entity);
        void Delete(ObjectId id);
        TEntity GetById(ObjectId id);
        void Update(TEntity entity);
        IEnumerable<TEntity> GetAll();
        void Save();
    }
}
