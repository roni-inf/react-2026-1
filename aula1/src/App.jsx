import Aluno from "./components/Aluno";
import { Componente2, Componente3 } from "./components/Componente";
import Curso from "./components/Curso";
import Exemplo from "./components/Exemplo";
import Usuario from "./components/Usuario";
import "./index.css";

export default function App() {
  
  const texto = {
    color: "#cd4466",
    fontSize: "6rem",
  };

  const times = ["Flamengo", "Fluminense", "Vasco", "Botafogo", "América"];

  const listaDeTimes = times.map((time, index) => <li key={index}>{time}</li>);

  const curso = () => {
    return "Curso de React";
  };

  const pessoa = {
    nome: "José",
    idade: 23,
  };

  const dados = (p) => {
    return p.nome;
  };

  const soma = (x, y) => x + y;

  return (
    <div style={{ color: "greenyellow", fontFamily: "Arial" }}>
      <h2>Lista de Times</h2>
      <ul>{listaDeTimes}</ul>
      <h3>{curso()}</h3>
      <h3>Olá, {dados(pessoa)}</h3>
      <h3>Resultado da Soma: {soma(10, 20)}</h3>
      <Exemplo />
      <Componente3 />
      <Componente2 />

      <Curso nome="React" texto="Aula de Introdução" />
      <Aluno
        nome="Alessandro"
        idade="20"
        email="alessandro@gmail.com"
        status={false}
      />
      <Usuario />
      <p style={texto}>Introdução ao CSS</p>
    </div>
  );
}
