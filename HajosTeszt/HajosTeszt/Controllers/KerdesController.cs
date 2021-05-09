using HajosTeszt.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class KerdesController : ControllerBase
    {
        [HttpGet]
        [Route("kerdes/count")]
        public int M1()
        {
            HajostesztContext context = new HajostesztContext();
            int kerdesekszama = context.Questions.Count();
            return kerdesekszama;
        }

        [HttpGet]
        [Route("kerdes/{sorszam}")]

        public ActionResult M2(int sorszam)
        {
            HajostesztContext context = new HajostesztContext();
            var kerdes = (from x in context.Questions
                          where x.QuestionId == sorszam
                          select x).FirstOrDefault();

            if (kerdes == null) return BadRequest("Nincs ilyen kérdés");

            return new JsonResult(kerdes);
        }
    }
}

