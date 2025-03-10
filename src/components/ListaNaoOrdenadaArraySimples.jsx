import React from "react";

function ListaNaoOrdenadaArraySimples(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaNaoOrdenadaArraySimples;
