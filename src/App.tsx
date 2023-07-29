import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  //Variáveis
  const name: string = "Yuri";
  const age: number = 24;
  const isWorking: boolean = true;

  return (
    <div className="App">
      <h1>React com typeScript</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando</p>}
    </div>
  );
}

export default App;
