export default function Evento() {
  const handleClick = () => {
    alert("Clicado!");
  };

  let nome = "Roni";

  function handleChangeName() {
    nome = "José";
  }
  return (
    <div>
      <p>Exemplo de Evento</p>
      <button onClick={handleClick}>Click</button>
      <p>Segundo Botão</p>
      <button onClick={() => alert("Clicado2")}>Click2</button>

      <h2>{nome}</h2>
      <button onClick={handleChangeName()}>Alterar Nome</button>
      <h2>{nome}</h2>
    </div>
  );
}
