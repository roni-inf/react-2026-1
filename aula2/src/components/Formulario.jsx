import { useState } from "react";

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [texto, setTexto] = useState("");

  function handleSubmit() {
    alert(`Dados de envio do cadastro:${nome} - ${email} `);
  }

  return (
    <div>
      <h1>Formulário de Cadastro de Clientes</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Digite seu nome"
          onChange={(e) => setNome(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input type="text" onChange={(e) => setTexto(e.target.value)} />
        <p>Você digitou:{texto}</p>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
