import React from "react";

function ListaNaoOrdenadaArrayObj(props) {
  return (
    <div className="list-container">
      <h3>{props.title}</h3>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>
            <p>Nome:{item.name}</p>
            <p>Idade:{item.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaNaoOrdenadaArrayObj;
