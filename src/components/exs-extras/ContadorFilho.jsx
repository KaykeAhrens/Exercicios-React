import React from "react";

function ContadorFilho(props) {
  return (
    <div>
      <button className="button-contador" onClick={props.incrementar}>
        Incrementar
      </button>
      <button className="button-contador" onClick={props.decrementar}>
        Decrementar
      </button>
    </div>
  );
}

export default ContadorFilho;
