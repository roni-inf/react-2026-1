import { useState } from "react";

export default function State() {
  //   let valor = 100;
  const [valor, setValor] = useState(100);
  const [nome, setNome] = useState("João");

  function alterarValor() {
    setValor(valor * 2);
  }
  return (
    <div>
      <h2>Exemplo do uso do useState</h2>
      <p>Resultado:{valor}</p>
      <button onClick={alterarValor}>Calcular</button>
      <p>Nome:{nome}</p>
      <button onClick={() => setNome(nome === "João" ? "José" : "João")}>
        Alterar Nome
      </button>
    </div>
  );
}
