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
    public class PostController : ControllerBase
    {
        private readonly PostService _postService;

        private readonly IRepository<Post> _Post;

        public PostController(IRepository<Post> post, PostService postService)
        {
            _postService = postService;
            _Post = post;

        }
        //Add Post
        [HttpPost("AddPost")]
        public async Task<Object> AddPost([FromBody] PostDTO post)
        {
            try
            {
                Post newPost = new Post();
                newPost.Description = post.Description;
                await _postService.AddPost(newPost);
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }
        //Delete Post by PersonId
        [HttpDelete("DeletePostByPerson")]
        public bool DeletePostByPerson(int personId, int postId)
        {
            try
            {
                _postService.DeletePostByPerson(personId, postId);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        //Delete Post
        [HttpDelete("DeletePost")]
        public bool DeletePost(int postId)
        {
            try
            {
                _postService.DeletePost(postId);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        //Update Post
        [HttpPut("UpdatePost")]
        public bool UpdatePost(int postId, PostDTO postDTO)
        {
            try
            {
                Post updatePost = new Post();
                updatePost.Description = postDTO.Description;
                updatePost.Id = postId;
                _postService.UpdatePost(updatePost);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        //GET Post by Id
        [HttpGet("Get")]
        public Object Get(int postId)
        {
            var data = _postService.GetPostById(postId);
            var json = JsonConvert.SerializeObject(data, Formatting.Indented,
                new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
                }
            );
            return json;
        }
        //GET all by Person
        [HttpGet("GetAllPostByPerson")]
        public Object GetAllPostByPerson(int userId)
        {
            var data = _postService.GetPostByPersonId(userId);
            var json = JsonConvert.SerializeObject(data, Formatting.Indented,
                new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
                }
            );
            return json;
        }

        //GET All Posts
        [HttpGet("GetAllPosts")]
        public Object GetAllPosts()
        {
            var data = _postService.GetAllPosts();
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