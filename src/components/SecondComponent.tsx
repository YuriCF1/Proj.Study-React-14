import React from "react";

type Props = {
  name: string;
};

const SecondComponent = (props: Props) => {
  return (
    <div>
      <h3>Meu segundo component</h3>
      <p>O nome da pessoa é: {props.name}</p>
    </div>
  );
};

export default SecondComponent;
