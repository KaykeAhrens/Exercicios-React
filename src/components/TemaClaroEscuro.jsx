import React, { useState } from "react";

function TemaClaroEscuro() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  const toggleTheme = () => {
    setTemaEscuro(!temaEscuro);
  };

  return (
    <div className={`container ${temaEscuro ? "dark" : "light"}`}>
      <button onClick={toggleTheme}>
        Mudar para {temaEscuro ? "Tema Claro" : "Tema Escuro"}
      </button>
    </div>
  );
}

export default TemaClaroEscuro;
