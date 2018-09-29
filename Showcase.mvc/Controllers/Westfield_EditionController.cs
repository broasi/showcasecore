using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Showcase.mvc.Models;

namespace Showcase_Magazine.Controllers
{
    public class Westfield_EditionController : Controller
    {
        [Route("Westfield_Edition/GivingBack/{title}")]
        public IActionResult GivingBack(string title)
        {
            ViewBag.Layout = "_InsideLayout";
            return View("givingback/" + title, "");
        }

        public IActionResult Articles_Index(string dynamicstring)
        {
            return View("articles/" + dynamicstring, "~/Views/Shared/_InsideLayout.cshtml");
        }

        public IActionResult Salutes_Index(string dynamicstring)
        {
            return View("salutes/" + dynamicstring, "~/Views/Shared/_InsideLayout.cshtml");
        }

        public IActionResult CoverArtist(string dynamicstring)
        {
            return View("coverartist", "~/Views/Shared/_InsideLayout.cshtml");
        }

      }
}
