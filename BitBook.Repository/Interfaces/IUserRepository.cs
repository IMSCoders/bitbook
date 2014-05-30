using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BitBook.Repository.Entity;

namespace BitBook.Repository.Interfaces
{
    interface IUserRepository : IRepository<User>
    {
        User GetByName(string nameOrPartOfName);
        List<User> GetUsersByName(string nameOrPartOfName);
        User GetByEmail(string mailAddress);
    }
}
