using System.Linq;
using AutoMapper;
using Showcase.mvc.Dtos;
using Showcase.mvc.Models;

namespace Showcase.mvc.Helpers
{
    public class AutoMapperProfiles : Profile    
    {
        public AutoMapperProfiles()
        {            
            CreateMap<User, UserForDetailedDto>();
            CreateMap<UserForRegisterDto, User>();
            CreateMap<Client, ClientForRegisterDto>();
            CreateMap<ClientForRegisterDto, Client>();
            CreateMap<Category, CategoryDto>();
            CreateMap<CategoryDto, Category>();                                    
            CreateMap<Client, ClientForEditDto>();                                    
            CreateMap<ClientForEditDto, Client>();                                    
            CreateMap<ClientCategory, ClientCategoryDto>();                                    
            CreateMap<ClientCategoryDto, ClientCategory>();                                    
        }        
    }
}