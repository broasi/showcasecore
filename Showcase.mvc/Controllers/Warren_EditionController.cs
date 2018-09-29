using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Showcase.mvc.Models;

namespace Showcase.mvc.Controllers
{
    public class Warren_EditionController : Controller
    {
        [Route("Warren_Edition/GivingBack/{title}")]
        public IActionResult GivingBack(string title)
        {
            ViewBag.Layout = "_InsideLayout";
            return View("givingback/" + title, "");
        }

        [Route("Warren_Edition/Articles/{title}")]
        public IActionResult Articles(string title)
        {
            ViewBag.Layout = "_InsideLayout";
            return View("articles/" + title, "");
        }

        [Route("Warren_Edition/Salutes/{title}")]
        public IActionResult Salutes(string title)
        {
            ViewBag.Layout = "_InsideLayout";
            return View("salutes/" + title, "");
        }        

        public IActionResult CoverArtist()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
