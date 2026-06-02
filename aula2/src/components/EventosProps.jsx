import Botao from "./Botao";

export default function EventosProps() {
    const testeEvento = ()=> alert("Teste de Evento");
    const segundoEvento = ()=> alert("Segundo Evento");
    
    

  return (
    <div>
        <Botao evento={testeEvento} texto="Botão1" />
        <Botao evento={segundoEvento} texto="Botão2" />
    </div>
  )
}
