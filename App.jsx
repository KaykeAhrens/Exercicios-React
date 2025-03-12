import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Exercicio1 from './components/Exercicio1.jsx';
import Exercicio2 from './components/Exercicio2.jsx';
import Exercicio3 from './components/Exercicio3.jsx';

function App() {
  const [exSelecionado, setExSelecionado] = useState(null)
  const [tema, setTema] = useState('light')

  const trocarTema = () => {
    setTema(tema === 'light' ? 'dark' : 'light')
    document.body.className = tema === 'light' ? 'dark' : 'light'
  }

  return (
    <div className="app">
      <Header trocarTema={trocarTema} />
      <div className="buttons">
        <button onClick={() => setExSelecionado(1)}>Exercicio 1</button>
        <button onClick={() => setExSelecionado(2)}>Exercicio 2</button>
        <button onClick={() => setExSelecionado(3)}>Exercicio 3</button>
      </div>
      <div className="exercicio-container">
        {exSelecionado === 1 && <Exercicio1 />}
        {exSelecionado === 2 && <Exercicio2 />}
        {exSelecionado === 3 && <Exercicio3 />}
      </div>
      <Footer name="Kayke Ahrens Biscegli" semestre="5 Semestre" curso="BCC"/>
    </div>
  );
}

export default App;