import React, { Component } from "react";

export default class AppClasse extends React.Component {
  constructor(props) {
    console.log("construtor executado");
    super(props);
    this.state = {
      dia: "Terça-Feira",
      hora:"00:00:00"
    };
  }

  componentDidMount() {
    console.log("Did. Mount executado");
    setInterval(()=>{
        this.setState({hora:new Date().toLocaleTimeString()})
    },1000)

  }

  componentDidUpdate() {
    console.log("Did Update Executado...");
  }

  componentWillUnmount() {
    console.log("WillUnmount Executado!");
  }

  render() {
    return (
        <div>
            <h1>Componente de Classe</h1>
            <h2>{this.state.dia}</h2>
            <h2>{this.state.hora}</h2>
        </div>
        
    )
  }
}
