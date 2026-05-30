import Filho from "./Filho";

export default function Usuario() {
  const usuarios = [
    {
      nome: "Carla",
      idade: 25,
    },
    {
      nome: "Carlos",
      idade: 32,
    },
    {
      nome: "Marcos",
      idade: 21,
    },
  ];

  return (
    <div>
        <Filho users={usuarios}/>
    </div>
  )
}
