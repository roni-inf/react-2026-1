export default function Filho(props) {
  const lista = props.users;
  return (
    <div>
      <h2>Usuários</h2>
      <ul>
        {lista.map((user, index) => (
          <li key={index}>
            {user.nome} - {user.idade}
          </li>
        ))}
      </ul>
    </div>
  );
}
