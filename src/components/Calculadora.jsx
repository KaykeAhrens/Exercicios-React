import React, { useState } from "react";

function Calculadora() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resposta, setResposta] = useState(0);

  const adicao = () => {
    setResposta(num1 + num2);
  };

  const subtracao = () => {
    setResposta(num1 - num2);
  };
  const multiplicacao = () => {
    setResposta(num1 * num2);
  };

  const divisao = () => {
    setResposta(num1 / num2);
  };
  const deletar = () => {
    setNum1("");
    setNum2("");
    setResposta(null);
  };

  return (
    <>
      <div>
        <h3>Calculadora Simples</h3>
        <div>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(Number(e.target.value))}
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(Number(e.target.value))}
          />
        </div>
        <div>
          <button className="button-calc" onClick={adicao}>
            Adição
          </button>
          <button className="button-calc" onClick={subtracao}>
            Subtração
          </button>
          <button className="button-calc" onClick={multiplicacao}>
            Multiplicação
          </button>
          <button className="button-calc" onClick={divisao}>
            Divisão
          </button>
          <button className="button-calc" onClick={deletar}>
            Zerar Campos
          </button>
        </div>
        <h3>Resultado: {resposta}</h3>
      </div>
    </>
  );
}

export default Calculadora;
