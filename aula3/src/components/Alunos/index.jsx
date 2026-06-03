import { useContext } from "react";
import Nome from "./Nome";
import { UserContext } from "../../contexts/user";

export default function Alunos() {
  const { nomeAluno, totalAlunos } = useContext(UserContext);

  return (
    <div>
      <h2>Componente de Alunos - {nomeAluno}</h2>
      <h3>Total de Alunos:{totalAlunos}</h3>
      <Nome />
    </div>
  );
}
