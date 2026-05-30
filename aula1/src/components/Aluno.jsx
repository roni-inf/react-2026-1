export default function Aluno({ nome, email, idade, status }) {
  return (
    <div>
      <p>Seu nome é:{nome}</p>
      <p>Seu email é:{email}</p>
      <p>Sua idade é:{idade}</p>
      <p>Status:{status ? "Ativo" : "Inativo"}</p>
    </div>
  );
}
