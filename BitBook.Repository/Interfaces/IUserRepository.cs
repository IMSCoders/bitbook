using System.Collections.Generic;
using BitBook.Repository.Entity;

namespace BitBook.Repository.Interfaces
{
    public interface IUserRepository : IRepository<User>
    {
        User GetByName(string nameOrPartOfName);
        User GetByEmail(string mailAddress);
        User GetById(string id);
        IEnumerable<User> GetAllSafely();
        IEnumerable<User> GetUsersByName(string nameOrPartOfName);
        IEnumerable<string> GetCommonFriends(User userOne, User userTwo);
    }
}
