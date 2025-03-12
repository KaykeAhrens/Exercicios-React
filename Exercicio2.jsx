import React, { useState } from 'react';

function Exercicio2() {
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')
  const [resultado, setResultado] = useState('')
  const [erro, setErro] = useState('')

  const calcularIMC = () => {
    const alturaNum = parseFloat(altura)
    const pesoNum = parseFloat(peso)

    const imc = pesoNum / (alturaNum * alturaNum)
    let categoria

    if (isNaN(imc) || alturaNum <= 0 || pesoNum <= 0) {
        setErro('Nao é um valor valido!')
        setResultado('')
        return
      }

    setErro('')

    if (imc < 18.5) {
      categoria = 'Abaixo do peso'
    } else if (imc >= 18.5 && imc <= 24.9) {
      categoria = 'Peso normal'
    } else if (imc >= 25 && imc <= 29.9) {
      categoria = 'Sobrepeso'
    } else {
      categoria = 'Obesidade'
    }

    setResultado(`IMC: ${imc} - Categoria: ${categoria}`)
  }

  const limparCampos = () => {
    setAltura('')
    setPeso('')
    setResultado('')
    setErro('')
  }

  return (
    <div>
      <h2>Calculadora de IMC</h2>
      <input
        type="text"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        placeholder="Altura com . (Ex: 1.70m)"
      />
      <input
        type="text"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        placeholder="Peso (Ex: 50kg)"
      />
      <div>
        <button onClick={calcularIMC}>Calcular IMC</button>
        <button onClick={limparCampos}>Zerar</button>
      </div>
      {erro && <p>{erro}</p>}
      {resultado && <p>{resultado}</p>}
    </div>
  );
}

export default Exercicio2;