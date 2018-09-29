using System.IO;
using Microsoft.AspNetCore.Mvc;

namespace Showcase.mvc.Controllers
{
    public class Fallback : Controller
    {
        public IActionResult Index()
        {
            return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "indexspa.html"), "text/HTML");
        }
    }
}