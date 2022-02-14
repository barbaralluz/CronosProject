using CRUD_DAL.Interface;
using CRUD_DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUD_BAL.Services
{
    public class PostService
    {
        private readonly IRepository<Post> _post;

        public PostService(IRepository<Post> post)
        {
            _post = post;
        }

        //GET All Posts
        public IEnumerable<Post> GetAllPosts()
        {
            try
            {
                return _post.GetAll().ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }
        //Get Post Details By Id
        public IEnumerable<Post> GetPostById(int postId)
        {
            return _post.GetAll().Where(x => x.Id == postId).ToList();
        }
        //Get Post By Person Id
        public IEnumerable<Post> GetPostByPersonId(int userId)
        {
            return _post.GetAll().Where(x => x.CreatedBy.Id == userId).ToList();
        }
        //Add Post
        public async Task<Post> AddPost(Post post)
        {
            return await _post.Create(post);
        }
        //Delete Post by Person
        public bool DeletePostByPerson(int personId, int postId)
        {

            try
            {
                var DataList = _post.GetAll().Where(x => x.CreatedBy.Id == personId && x.Id == postId).ToList();
                foreach (var item in DataList)
                {
                    _post.Delete(item);
                }
                return true;
            }
            catch (Exception)
            {
                return true;
            }

        }
        //Delete Post
        public bool DeletePost(int postId)
        {

            try
            {
                var DataList = _post.GetAll().Where(x => x.Id == postId).ToList();
                foreach (var item in DataList)
                {
                    _post.Delete(item);
                }
                return true;
            }
            catch (Exception)
            {
                return true;
            }

        }
        //Update Post Details
        public bool UpdatePost(Post post)
        {
            try
            {
                var DataList = _post.GetAll().Where(x => x.Id == post.Id).ToList();
                foreach (var item in DataList)
                {
                    item.Description = post.Description;
                    _post.Update(item);
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