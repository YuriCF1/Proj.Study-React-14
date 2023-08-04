import React, { createContext } from "react";

import "./App.css";

//4 - Imporntando
import FirstComponent from "./components/FirstComponent";

//5 - Desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

//6 - useState
import State from "./components/State";

//10 - Utilizando o context
import Context from "./components/Context";

//8 - Type
type textOrNull = string | null;
type fixed = "Oi" | "Olá" | "Bom dia!";

// 9 - Context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

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

  //8 - type
  const myText: textOrNull = "Exemplo de texto qualquer";
  let mySecondText: textOrNull = null;

  mySecondText = null;

  const testandoFixed: fixed = "Oi"; //Ele não permite qualquer outro tipo de texto, nem um 'oi'

  //9 - Context
  const contextValue: IAppContext = {
    language: "Javascript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
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
          category={Category.P}
        />
        <Destructuring
          title="Segundo post"
          content="Exemplo 2"
          commentsQty={5}
          tags={["backend", "frontkend"]}
          category={Category.TS}
        />
        <State />
        {myText && <p>O texto na variável é: {myText}</p>}
        {mySecondText && <p>O texto na segunda variável é: {mySecondText}</p>}
        {testandoFixed && <p>O texto fixo é: {testandoFixed}</p>}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
