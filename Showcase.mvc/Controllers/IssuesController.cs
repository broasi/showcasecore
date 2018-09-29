using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Showcase.mvc.Models;

namespace Showcase.mvc.Controllers
{
    public class IssuesController : Controller
    {
        [Route("Issues/{title}")]
        public IActionResult Issues(string title)
        {
            ViewBag.Layout = "_InsideLayout"; 
            return View(title, "");
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
