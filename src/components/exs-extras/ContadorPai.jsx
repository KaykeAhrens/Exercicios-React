import React, { useState } from "react";
import ContadorFilho from "./ContadorFilho";

function ContadorPai() {
  const [contador, setContador] = useState(0);

  // Funções para incrementar e decrementar
  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return (
    <div>
      <h3>Contador: {contador}</h3>
      <ContadorFilho incrementar={incrementar} decrementar={decrementar} />
    </div>
  );
}

export default ContadorPai;
