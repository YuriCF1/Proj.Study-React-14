import React, { useContext } from "react";

import { AppContext } from "../App"; //Pegando o contexto criado, pois o dado foi inserido em contextValue e ainda foi afirmado no provider

const Context = () => {
  const detailContext = useContext(AppContext);

  return (
    <>
      {detailContext && (
        <div>
          <h2>Lingugaem: {detailContext.language}</h2>
          <h2>Framework: {detailContext.framework}</h2>
          <h2>Quantidade: {detailContext.projects}</h2>
        </div>
      )}
    </>
  );
};

export default Context;
