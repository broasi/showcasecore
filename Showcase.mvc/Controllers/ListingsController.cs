using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Showcase.mvc.Data;
using Showcase.mvc.Dtos;

namespace Showcase.mvc.Controllers
{
    public class ListingsController : Controller
    {
        [Route("listings/businessguide")]
        public IActionResult BusinessGuide()
        {
            ViewBag.Layout = "_InsideLayout";             
            return View();
        }

        [Route("listings/businessguide/{id}")]
        public IActionResult BusinessGuide(int id)
        {
            ViewBag.Category_Id = id;
            ViewBag.Layout = "_InsideLayout"; 
            return View();
        }
    }
}
