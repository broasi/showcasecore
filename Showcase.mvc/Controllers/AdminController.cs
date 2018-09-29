using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Showcase.mvc.Data;
using Showcase.mvc.Dtos;
using AutoMapper;
using Showcase.mvc.Models;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

namespace Showcase.mvc.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class AdminController : Controller
    {
        private readonly ICategoryRepository _repoCategory;
        private readonly IClientRepository _repoClient;
        private readonly IMapper _mapper;

        public AdminController(ICategoryRepository repoCategory, IClientRepository repoClient, IMapper mapper)
        {
            _mapper = mapper;
            _repoClient = repoClient;
            _repoCategory = repoCategory;
        }       

        [HttpPost("AddClient")]
        public async Task<IActionResult> AddClient([FromBody]ClientForRegisterDto clientForRegisterDto)
        {
            if (await _repoClient.ClientExists(clientForRegisterDto.Name))
                return BadRequest("Client exists!");

            var clientToCreate = _mapper.Map<Client>(clientForRegisterDto);            
            var createdClient = await _repoClient.AddClient(clientToCreate,  clientForRegisterDto.Category_Id);
            var clientToReturn = _mapper.Map<ClientForRegisterDto>(createdClient);
            return Ok(clientToReturn);
        }

        [HttpGet("GetClient/{Id}")]
        public async Task<IActionResult> GetClient(int Id)
        {
            var client = await _repoClient.GetClient(Id);

            return Ok(client);
        }

        [HttpGet("GetClientByName/{clientName}")]
        public async Task<IActionResult> GetClientByName(string clientName)
        {
            var client = await _repoClient.GetClientByName(clientName);

            return Ok(client);
        }

        [HttpPut("UpdateClient/{Id}")]
        public async Task<IActionResult> UpdateClient(int Id, [FromBody]ClientForEditDto clientForEditDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var clientFromRepo = await _repoClient.GetClient(Id);

            if(clientFromRepo == null)
                return NotFound($"Could not find client with an ID of {Id}");

            _mapper.Map(clientForEditDto, clientFromRepo);

            if(await _repoClient.SaveAll())
                return NoContent();

            throw new Exception($"Updating user {Id} failed on save");
        }

        [HttpPost("AddCategory")]
        public async Task<IActionResult> AddCategory([FromBody]CategoryDto categoryDto)
        {
            if (await _repoCategory.CategoryExists(categoryDto.Description))
                return BadRequest("Category Exists!");

            var categoryToCreate = _mapper.Map<Category>(categoryDto);
            var createdCategory = await _repoCategory.AddCategory(categoryToCreate);
            var categoryToReturn = _mapper.Map<CategoryDto>(createdCategory);

            return Ok(categoryToReturn);
        }

        [HttpGet("Categories")]
        public async Task<IActionResult> GetCategories()
        {
            var categories = await _repoCategory.ListCategories();
            var categoriesToReturn = _mapper.Map<IEnumerable<CategoryDto>>(categories);

            return Ok(categoriesToReturn);
        }

        [HttpGet("ListAllClients")]
        public async Task<IActionResult> ListAllClients()
        {
            var clients = await _repoClient.ListAllClients();
            var clientsToReturn = _mapper.Map<IEnumerable<ClientForEditDto>>(clients);

            return Ok(clientsToReturn);
        }
        
        [HttpDelete("DeleteClient/{id}")]
        public async Task<IActionResult> DeleteClient(int userId, int id)
        {
           // if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
          //     return Unauthorized();

            var clientFromRepo = await _repoClient.GetClient(id);
            if (clientFromRepo== null)
                return NotFound();
           
            _repoClient.Delete(clientFromRepo);

            if (await _repoClient.SaveAll())
                return Ok();

            return BadRequest("Failed to delete the photo");
        }
// public async Task<IEnumerable<User>> GetUsers()
//         {
//             var users = await _context.Users.Include(p => p.Photos).ToListAsync();
//             return users;
//         }        

        // GET api/values
        // [HttpPost]
        // public IActionResult GetClients()
        // {
        //      var clients = _repo.ListClients();

        //      return Ok(clients);         
        // }        
      
        // // GET api/values/5
        // [HttpGet("{id}")]
        // public string Get(int id)
        // {
        //     return "value to";
        // }

        // // POST api/values
        // [HttpPost]
        // public void Post([FromBody]string value)
        // {
        // }

        // // PUT api/values/5
        // [HttpPut("{id}")]
        // public void Put(int id, [FromBody]string value)
        // {
        // }

        // // DELETE api/values/5
        // [HttpDelete("{id}")]
        // public void Delete(int id)
        // {
        // }
    }
}
