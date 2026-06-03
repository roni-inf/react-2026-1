import { useEffect, useState } from "react";

export default function ExemploUseEffect() {
  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState("José");
  const [hora, setHora] = useState(new Date());

  const alterarNome = () => {
    setNome(nome === "José" ? "Maria" : "José");
  };

  useEffect(() => {
    setInterval(() => {
      setHora(new Date());
    }, 1000);
  }, []);

  useEffect(() => {
    if (contador != 0) {
      alert("Executa");
    }
  }, [contador]);

  return (
    <div>
      <h2>Hora:{hora.toLocaleTimeString()}</h2>
      <h2>Contador:{contador}</h2>
      <h2>{nome}</h2>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={alterarNome}>Alterar Nome</button>
    </div>
  );
}
