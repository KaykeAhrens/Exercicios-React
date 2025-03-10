import React, { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0); // Inicializa o contador com 0

  const increment = () => {
    setCount(count + 1); // Incrementa o contador
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1); // Decrementa o contador se o valor for maior que 0
    }
  };

  return (
    <div className="contador">
      <h2>Contador</h2>
      <p>Valor Atual: {count}</p>
      <button className="button-contador" onClick={increment}>
        Incrementar
      </button>
      <button className="button-contador" onClick={decrement}>
        Decrementar
      </button>
    </div>
  );
}

export default Contador;
