using CRUD_BAL.Services;
using CRUD_DAL.Interface;
using CRUD_DAL.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCoreAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceController : ControllerBase
    {
        private readonly ServiceService _serviceService;

        private readonly IRepository<Service> _service;

        public ServiceController(IRepository<Service> service, ServiceService serviceService)
        {
            _serviceService = serviceService;
            _service = service;

        }
        //Add Service
        [HttpPost("AddService")]
        public async Task<Object> AddService([FromBody] ServiceDTO servic)
        {
            try
            {
                Service newService = new Service();
                newService.Name = servic.Name;
                newService.Description = servic.Description;
                await _serviceService.AddService(newService);
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }
        //Delete Service by PersonId
        [HttpDelete("DeleteServiceByPerson")]
        public bool DeleteServiceByPerson(int personId, int serviceId)
        {
            try
            {
                _serviceService.DeleteServiceByPerson(personId, serviceId);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        //Delete Post
        [HttpDelete("DeleteService")]
        public bool DeleteService(int serviceId)
        {
            try
            {
                _serviceService.DeleteService(serviceId);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        //Update Post
        [HttpPut("UpdateService")]
        public bool UpdateService(int serviceId, ServiceDTO service)
        {
            try
            {
                Service updateService = new Service();
                updateService.Id = serviceId;
                updateService.Name = service.Name;
                updateService.Description = service.Description;
                _serviceService.UpdateService(updateService);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        //GET Service by Id
        [HttpGet("Get")]
        public Object Get(int serviceId)
        {
            var data = _serviceService.GetServiceById(serviceId);
            var json = JsonConvert.SerializeObject(data, Formatting.Indented,
                new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
                }
            );
            return json;
        }
        //GET all by Person
        [HttpGet("GetAllServiceByPerson")]
        public Object GetAllServiceByPerson(int userId)
        {
            var data = _serviceService.GetServiceByPersonId(userId);
            var json = JsonConvert.SerializeObject(data, Formatting.Indented,
                new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
                }
            );
            return json;
        }

        //GET All Posts
        [HttpGet("GetAllServices")]
        public Object GetAllServices()
        {
            var data = _serviceService.GetAllServices();
            var json = JsonConvert.SerializeObject(data, Formatting.Indented,
                new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
                }
            );
            return json;
        }
    }
}