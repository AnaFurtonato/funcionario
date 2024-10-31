import React, { useState, useEffect } from "react";
import FormularioAvaliacaoFuncionario from "./components/FormularioAvaliacaoFuncionario";
import ListaFuncionarios from "./components/ListaFuncionarios";
import './App.css';

function App() {
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5296/api/funcionario")
      .then(response => response.json())
      .then(data => setFuncionarios(data));
  }, []);

  const adicionarFuncionario = (funcionario) => {
    fetch("http://localhost:5296/api/funcionario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(funcionario)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro HTTP! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => setFuncionarios([...funcionarios, data]))
    .catch(error => console.error('Erro:', error));
  };

  return (
    <div className="app">
      <h1>Avaliação de Funcionários</h1>
      <FormularioAvaliacaoFuncionario adicionarFuncionario={adicionarFuncionario} />
      <ListaFuncionarios funcionarios={funcionarios} />
    </div>
  );
}

export default App;
