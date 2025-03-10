import React from "react";

function GrupoBotao(props) {
  return (
    <div className="button-group">
      <button style={{ backgroundColor: props.color1 }}>{props.text1}</button>
      <button style={{ backgroundColor: props.color2 }}>{props.text2}</button>
      <button style={{ backgroundColor: props.color3 }}>{props.text3}</button>
    </div>
  );
}

export default GrupoBotao;
