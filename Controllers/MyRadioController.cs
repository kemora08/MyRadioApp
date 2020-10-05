using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using capstone.Data;
using capstone.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

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
            return _context.MyRadioApps.ToArray();
        }
        [HttpPost]
        public MyRadioApp Post([FromBody] MyRadioApp myRadioApp)
        {
            _context.MyRadioApps.Add(myRadioApp);
            _context.SaveChanges();
            return myRadioApp;
        }
    }
}
