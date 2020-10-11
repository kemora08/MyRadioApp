using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using capstone.Data;
using capstone.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Security.Claims;

namespace capstone.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MyRadioAppController : ControllerBase
    {
        private ApplicationDbContext _context;
        public MyRadioAppController(ApplicationDbContext context){
            _context = context;
        }
        [HttpGet]
        public IEnumerable<MyRadioApp> Get()
        {
            var userId = HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);
            return _context.MyRadioApps.Where(x => x.UserId == userId).ToArray();
        }
        [HttpPost]
        public MyRadioApp Post([FromBody] MyRadioApp myRadioApp)
        {
            var userId = HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);
            myRadioApp.UserId = userId;
            _context.MyRadioApps.Add(myRadioApp);
            _context.SaveChanges();
             return myRadioApp;
        }
    }
}
