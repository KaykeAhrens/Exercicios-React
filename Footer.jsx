import React from 'react';

function Footer(props) {
  return (
    <footer>
      <p>Nome: {props.name}</p>
      <p>Semestre: {props.semestre}</p>
      <p>Curso: {props.curso}</p>
    </footer>
  );
}

export default Footer;