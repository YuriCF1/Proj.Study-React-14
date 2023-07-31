import React from "react";

type Props = {
  title: string;
  content: string;
  commentsQty: number; //Quantidade de posts
  tags: string[];
};

// const Destructuring = (props: Props) => { //Fazendo o uso de 'props.' desnecessário
const Destructuring = ({ title, content, commentsQty, tags }: Props) => {
  return (
    <div>
      {/* <h2>{props.title}</h2> */}
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentsQty}</p>
      <div>
        {tags.map((tag) => (
          <span>#{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Destructuring;
