import React from "react";

function Bola8Magica() {
  // Definindo um array com as respostas possíveis
  const respostas = [
    "Sim",
    "Não",
    "Talvez",
    "Depende",
    "Com certeza",
    "Eu não sei",
    "Claro que não",
    "Provavelmente sim",
  ];

  // Função para escolher uma resposta aleatória
  const askTheBall = () => {
    const randomIndex = Math.floor(Math.random() * respostas.length); // Gera um índice aleatório
    alert(respostas[randomIndex]); // Exibe a resposta aleatória em um alert
  };

  return (
    <div className="magic-ball">
      <h2>Bola 8 Mágica</h2>
      <button onClick={askTheBall}>Pergunte à Bola 8</button>
    </div>
  );
}

export default Bola8Magica;
