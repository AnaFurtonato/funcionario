import React, { useState } from "react";

function FormularioAvaliacaoFuncionario({ adicionarFuncionario }) {
  const [nome, setNome] = useState("");
  const [avaliacao, setAvaliacao] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome && avaliacao) {
      adicionarFuncionario({ nome, avaliacao });
      setNome("");
      setAvaliacao("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <div className="campo">
        <label>
          Nome do Funcionario:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="entrada"
          />
        </label>
      </div>
      <div className="campo">
        <label>
          Avaliação:
          <input
            type="text"
            value={avaliacao}
            onChange={(e) => setAvaliacao(e.target.value)}
            className="entrada"
          />
        </label>
      </div>
      <button type="submit" className="botao">
        Adicionar Funcionário
      </button>
    </form>
  );
}

export default FormularioAvaliacaoFuncionario;
