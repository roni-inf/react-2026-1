// export default function Exemplo(){

//     return(
//         <div>

//         </div>

//     )

// }
const Exemplo = () => {
  const numeros = [10, 30, 50, 100];
  let total = 0;
  const soma = numeros.reduce((total, numero) => total + numero);

  for (let i = 0; i < numeros.length; i++) {
    total += numeros[i];
  }

  //Filtro vai retornar os números superiores ou igual a 50

  const filtro = numeros.filter((num) => num >= 50);

  return (
    <div>
      <h1>Componente de Exemplo</h1>
      <h2>Resultado:{soma}</h2>
      <h2>{total}</h2>
      <h2>{filtro.join(";")}</h2>
    </div>
  );
};
export default Exemplo;
