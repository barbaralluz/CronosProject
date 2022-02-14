using CRUD_DAL.Interface;
using CRUD_DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUD_BAL.Services
{
    public class PersonService
    {
        private readonly IRepository<Person> _person;

        public PersonService(IRepository<Person> person)
        {
            _person = person;
        }
        //Get Person Details By Person Id
        public IEnumerable<Person> GetPersonByUserId(int userId)
        {
            return _person.GetAll().Where(x => x.Id == userId).ToList();
        }
        //GET All Person Details 
        public IEnumerable<Person> GetAllPersons()
        {
            try
            {
                return _person.GetAll().ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }
        //Get Person by Person Name
        public IEnumerable<Person> GetPersonByUserName(string userName)
        {
            return _person.GetAll().Where(x => x.UserName == userName).ToList();
        }
        //Add Person
        public async Task<Person> AddPerson(Person person)
        {
            return await _person.Create(person);
        }
        //Delete Person 
        public bool DeletePerson(int userId)
        {

            try
            {
                var DataList = _person.GetAll().Where(x => x.Id == userId).ToList();
                foreach (var item in DataList)
                {
                    _person.Delete(item);
                }
                return true;
            }
            catch (Exception)
            {
                return true;
            }

        }
        //Update Person Details
        public bool UpdatePerson(Person person)
        {
            try
            {
                var DataList = _person.GetAll().Where(x => x.Id == person.Id).ToList();
                foreach (var item in DataList)
                {
                    item.UserName = person.UserName;
                    item.UserEmail = person.UserEmail;
                    item.IsDeleted = person.IsDeleted;
                    _person.Update(item);
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