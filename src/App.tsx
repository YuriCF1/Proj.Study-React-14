import React from "react";

import "./App.css";

//4 - Imporntando
import FirstComponent from "./components/FirstComponent";

//5 - Desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring from "./components/Destructuring";

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
      <SecondComponent name={"Iury"} />
      <Destructuring
        title="Primeiro post"
        content="Exemplo"
        commentsQty={10}
        tags={["JS", "TS"]}
      />
      <Destructuring
        title="Segundo post"
        content="Exemplo 2"
        commentsQty={5}
        tags={["backend", "frontkend"]}
      />
    </div>
  );
}

export default App;
