import { useContext } from "react";
import { UserContext } from "../../../contexts/user";

export default function Nome() {
    const {nomeAluno, setNomeAluno}= useContext(UserContext);
  return (
    <div>
      <h2>Bem Vindo:{nomeAluno}</h2>
      <button onClick={()=>setNomeAluno(nomeAluno === "Maria" ? "Mariana" : "Maria")}>Alterar Nome</button>
    </div>
  );
}
