import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import GrupoBotao from "./components/GrupoBotao.jsx";
import ListaNaoOrdenadaArraySimples from "./components/ListaNaoOrdenadaArraySimples.jsx";
import ListaNaoOrdenadaArrayObj from "./components/ListaNaoOrdenadaArrayObj.jsx";
import TemaClaroEscuro from "./components/TemaClaroEscuro.jsx";
import BotaoConteudo from "./components/BotaoConteudo.jsx";
import Contador from "./components/Contador.jsx";
import Bola8Magica from "./components/Bola8Magica.jsx";
import Calculadora from "./components/Calculadora.jsx";
import StudentList from "./components/desafio/StudentList.jsx";
import StudentCard from "./components/desafio/StudentCard.jsx";
import OnMouseOverEx from "./components/exs-extras/OnMouseOverEx.jsx";
import OnSubmitEx from "./components/exs-extras/OnSubmitEx.jsx";
import ContadorPai from "./components/exs-extras/ContadorPai.jsx";
import ContadorFilho from "./components/exs-extras/ContadorFilho.jsx";

function App() {
  const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Manga"];
  const pessoas = [
    { name: "Carlos", age: 25 },
    { name: "Ana", age: 30 },
    { name: "João", age: 28 },
    { name: "Maria", age: 22 },
  ];

  return (
    <div className="container">
      <Header
        title="Exercício 1 - Cabeçalho e Rodapé"
        subtitle="Resolvendo os Exercícios!"
      />

      <div className="exercise">
        <h3>Exercício 1 - Cabeçalho e Rodapé</h3>
        <p>Veja o cabeçalho e o rodapé desta página!</p>
      </div>

      <div className="exercise">
        <h3>Exercício 2 - Botões Personalizados</h3>
        <GrupoBotao
          text1="Iniciar"
          color1="green"
          text2="Pausar"
          color2="orange"
          text3="Parar"
          color3="red"
        />
      </div>

      <div className="exercise">
        <h3>Exercício 3 - Lista Não Ordenada de um Array Simples</h3>
        <ListaNaoOrdenadaArraySimples title="Lista de Frutas" items={frutas} />
      </div>

      <div className="exercise">
        <h3>Exercício 4 - Lista Não Ordenada de um Array de Objetos</h3>
        <ListaNaoOrdenadaArrayObj title="Lista de Pessoas" items={pessoas} />
      </div>

      <div className="exercise">
        <h3>Exercício 5 - Alternar Tema</h3>
        <TemaClaroEscuro />
      </div>

      <div className="exercise">
        <h3>Exercício 6 - Controle de Exibição de Conteúdo</h3>
        <BotaoConteudo content="Este é o conteúdo que pode ser escondido ou mostrado." />
      </div>

      <div className="exercise">
        <h3>Exercício 7 - Contador</h3>
        <Contador />
      </div>

      <div className="exercise">
        <h3>Exercício 8 - Bola 8 Mágica</h3>
        <Bola8Magica />
      </div>

      <div className="exercise">
        <h3>Exercício 9 - Calculadora</h3>
        <Calculadora />
      </div>

      <div className="exercise">
        <h3>Desafio</h3>
        <StudentList />
      </div>

      <div className="exercise">
        <h3>Exercício 10 - onMouseOver</h3>
        <OnMouseOverEx />
      </div>

      <div className="exercise">
        <h3>Exercício 11 - onSubmit</h3>
        <OnSubmitEx />
      </div>

      <div className="exercise">
        <h3>Exemplo de Lifting Up com useState</h3>
        <ContadorPai />
      </div>

      <Footer text="Todos os direitos reservados" />
    </div>
  );
}

export default App;
