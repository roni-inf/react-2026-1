import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function navegarContato() {
    navigate("/contatos");
  }
  return (
    <div>
      <h1>Página Principal</h1>
      <button onClick={navegarContato}>Ir para Contato</button>
    </div>
  );
}
