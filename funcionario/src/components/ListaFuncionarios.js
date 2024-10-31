import React from "react";

function ListaFuncionarios({ funcionarios }) {
  return (
    <div className="lista">
      <h2>Lista de Funcionários Avaliados</h2>
      <ul>
        {funcionarios.map((funcionario, index) => (
          <li key={index} className="item">
            {funcionario.nome} - Avaliação: {funcionario.avaliacao}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaFuncionarios;
