import Alunos from "./components/Alunos";
import ExemploGet from "./components/ExemploGet";
import ExemploUseEffect from "./components/ExemploUseEffect";
import UserProvider from "./contexts/user";

export default function App() {
  return (
    <UserProvider>
      <div>
        <h1>Escola</h1>
        <hr />
        <Alunos />
        <ExemploUseEffect/>
        <ExemploGet/>
      </div>
    </UserProvider>
  );
}
