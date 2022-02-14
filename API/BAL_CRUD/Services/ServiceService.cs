using CRUD_DAL.Interface;
using CRUD_DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUD_BAL.Services
{
    public class ServiceService
    {
        private readonly IRepository<Service> _service;

        public ServiceService(IRepository<Service> service)
        {
            _service = service;
        }

        //GET All Services
        public IEnumerable<Service> GetAllServices()
        {
            try
            {
                return _service.GetAll().ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }
        //Get Service Details By Id
        public IEnumerable<Service> GetServiceById(int serviceId)
        {
            return _service.GetAll().Where(x => x.Id == serviceId).ToList();
        }
        //Get Service By Person Id
        public IEnumerable<Service> GetServiceByPersonId(int userId)
        {
            return _service.GetAll().Where(x => x.CreatedBy.Id == userId).ToList();
        }
        //Add Service
        public async Task<Service> AddService(Service service)
        {
            return await _service.Create(service);
        }
        //Delete Service by PersonId
        public bool DeleteServiceByPerson(int personId, int serviceId)
        {
            try
            {
                var DataList = _service.GetAll().Where(x => x.CreatedBy.Id == personId && x.Id == serviceId).ToList();
                foreach (var item in DataList)
                {
                    _service.Delete(item);
                }
                return true;
            }
            catch (Exception)
            {
                return true;
            }

        }
        //Delete Service
        public bool DeleteService(int serviceId)
        {
            try
            {
                var DataList = _service.GetAll().Where(x => x.Id == serviceId).ToList();
                foreach (var item in DataList)
                {
                    _service.Delete(item);
                }
                return true;
            }
            catch (Exception)
            {
                return true;
            }

        }
        //Update Service Details
        public bool UpdateService(Service service)
        {
            try
            {
                var DataList = _service.GetAll().Where(x => x.Id == service.Id).ToList();
                foreach (var item in DataList)
                {
                    item.Name = service.Name;
                    item.Description = service.Description;
                    _service.Update(item);
                }
                return true;
            }
            catch (Exception)
            {
                return true;
            }
        }
    }
}