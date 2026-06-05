import { useSearchParams } from "react-router-dom";
export default function Contato() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");
  return (
    <div>
      <h1>Página de Contato</h1>
      {searchParams.get("texto")}
      {searchParams.get("mensagem")}

      <input
        type="text"
        value={query || ""}
        onChange={(e) => setSearchParams(e.target.value)}
      />
    </div>
  );
}
