using System.Collections.Generic;
using BitBook.Repository.Entity;

namespace BitBook.Repository.Interfaces
{
    public interface IUserRepository : IRepository<User>
    {
        User GetByName(string nameOrPartOfName);
        List<User> GetUsersByName(string nameOrPartOfName);
        User GetByEmail(string mailAddress);
    }
}
