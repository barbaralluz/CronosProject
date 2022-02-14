using CRUD_DAL.Data;
using CRUD_DAL.Interface;
using CRUD_DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUD_DAL.Repository
{
    public class RepositoryPost : IRepository<Post>
    {
        ApplicationDbContext _dbContext;
        public RepositoryPost(ApplicationDbContext applicationDbContext)
        {
            _dbContext = applicationDbContext;
        }
        public async Task<Post> Create(Post _object)
        {
            var obj = await _dbContext.Posts.AddAsync(_object);
            _dbContext.SaveChanges();
            return obj.Entity;
        }

        public void Delete(Post _object)
        {
            _dbContext.Remove(_object);
            _dbContext.SaveChanges();
        }

        public IEnumerable<Post> GetAll()
        {
            try
            {
                return _dbContext.Posts.ToList();
            }
            catch (Exception ee)
            {
                throw;
            }
        }

        public Post GetById(int Id)
        {
            return _dbContext.Posts.Where(x => x.Id == Id).FirstOrDefault();
        }

        public void Update(Post _object)
        {
            _dbContext.Posts.Update(_object);
            _dbContext.SaveChanges();
        }
    }
}
