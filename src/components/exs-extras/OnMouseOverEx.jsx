import React, { useState } from "react";

function OnMouseOverEx() {
  const [bgColor, setBgColor] = useState("lightblue"); // Cor inicial

  // Função para mudar a cor ao passar o mouse
  const handleMouseOver = () => {
    setBgColor("lightgreen");
  };

  // Função para restaurar a cor ao sair com o mouse
  const handleMouseOut = () => {
    setBgColor("lightblue");
  };

  return (
    <div>
      <button
        style={{ backgroundColor: bgColor }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Passe o mouse aqui!
      </button>
    </div>
  );
}

export default OnMouseOverEx;
