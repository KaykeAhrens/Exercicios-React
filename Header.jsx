import React from 'react';

function Header({ trocarTema }) {
  return (
    <header>
      <h1>Prova 1</h1>
      <button onClick={trocarTema}>Alternar Tema</button>
    </header>
  );
}

export default Header;