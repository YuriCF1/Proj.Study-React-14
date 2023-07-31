import React from "react";

import "./App.css";

//4 - Imporntando
import FirstComponent from "./components/FirstComponent";

function App() {
  //1 - Variáveis
  const name: string = "Yuri";
  const age: number = 24;
  const isWorking: boolean = true;

  //2 - Funções
  const userGreetubg = (name: string): string => {
    //Tipando o parametro e o retorno
    return `Olá ${name}`;
  };

  return (
    <div className="App">
      <h1>React com typeScript</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando</p>}
      <h3>{userGreetubg(name)}</h3>
      <FirstComponent />
    </div>
  );
}

export default App;
