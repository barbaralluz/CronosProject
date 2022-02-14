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
    public class RepositoryService : IRepository<Service>
    {
        ApplicationDbContext _dbContext;
        public RepositoryService(ApplicationDbContext applicationDbContext)
        {
            _dbContext = applicationDbContext;
        }
        public async Task<Service> Create(Service _object)
        {
            var obj = await _dbContext.Services.AddAsync(_object);
            _dbContext.SaveChanges();
            return obj.Entity;
        }

        public void Delete(Service _object)
        {
            _dbContext.Remove(_object);
            _dbContext.SaveChanges();
        }

        public IEnumerable<Service> GetAll()
        {
            try
            {
                return _dbContext.Services.ToList();
            }
            catch (Exception ee)
            {
                throw;
            }
        }

        public Service GetById(int Id)
        {
            return _dbContext.Services.Where(x => x.Id == Id).FirstOrDefault();
        }

        public void Update(Service _object)
        {
            _dbContext.Services.Update(_object);
            _dbContext.SaveChanges();
        }
    }
}
