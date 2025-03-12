import React from 'react';

function CidadeCard({ cidade, tempMax, tempMin, descricao, tempAtual, mostrarAlerta }) {
  return (
    <div className="card">
      <h3>{cidade}</h3>
      <p>Temperatura Max: {tempMax}</p>
      <p>Temperatura Min: {tempMin}</p>
      <p>Descrição: {descricao}</p>
      <button onClick={() => mostrarAlerta(tempAtual)}>Mostrar Temperatura Atual</button>
    </div>
  );
}

export default CidadeCard;