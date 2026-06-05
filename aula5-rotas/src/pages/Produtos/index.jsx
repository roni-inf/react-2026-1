import { useParams } from "react-router-dom";

export default function Contato() {
  const { id } = useParams();
  return (
    <div>{id ? <h2>Produto:{id}</h2> : <h2>Listagem de Produtos</h2>}</div>
  );
}
