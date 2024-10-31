using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace FuncionarioApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FuncionarioController : ControllerBase
    {
        private static List<Funcionario> funcionarios = new List<Funcionario>
        {
            new Funcionario { Id = 1, Nome = "Ana Clara", Avaliacao = "Bom trabalho" }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Funcionario>> ObterFuncionarios()
        {
            return Ok(funcionarios);
        }

        [HttpPost]
        public ActionResult<Funcionario> AdicionarFuncionario(Funcionario funcionario)
        {
            funcionario.Id = funcionarios.Count + 1;
            funcionarios.Add(funcionario);
            return CreatedAtAction(nameof(ObterFuncionarios), new { id = funcionario.Id }, funcionario);
        }
    }

    public class Funcionario
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string Avaliacao { get; set; } = string.Empty;
    }
}