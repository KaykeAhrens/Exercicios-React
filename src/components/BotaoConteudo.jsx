import React, { useState } from "react";

function BotaoConteudo(props) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button className="button-visible" onClick={toggleContent}>
        {isVisible ? "Esconder Conteúdo" : "Mostrar Conteúdo"}
      </button>

      {isVisible && <div className="content">{props.content}</div>}
    </div>
  );
}

export default BotaoConteudo;
