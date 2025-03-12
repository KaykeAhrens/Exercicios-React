import React, { useState } from 'react';

function Exercicio1() {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [resultado, setResultado] = useState('')
  const [erro, setErro] = useState('')

  const operacoes = (operacao) => {
    const num1 = parseFloat(input1)
    const num2 = parseFloat(input2)

    if (isNaN(num1) || isNaN(num2)) {
      setErro('Nao é um valor valido!')
      setResultado('')
      return
    }

    setErro('')

    let res

    if (operacao === 'adicao') {
        res = num1 + num2
    } else if (operacao === 'subtracao') {
        res = num1 - num2
    } else if (operacao === 'multiplicacao') {
        res = num1 * num2
    } else if (operacao === 'divisao') {
        if (num2 === 0) {
            setErro('Erro: Impossível dividir por 0')
            setResultado('')
            return
        }
        res = num1 / num2;
    } else if (operacao === 'raiz') {
        res = Math.sqrt(num1)
    } else if (operacao === 'exponencial') {
        res = Math.pow(num1, num2)
    } else {
        res = ''
    }
    
    setResultado(res);
    }

  const limparCampos = () => {
    setInput1('')
    setInput2('')
    setResultado('')
    setErro('')
  }

  return (
    <div>
      <h2>Calculadora</h2>
      <input
        type="text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        placeholder="Digite um número"
      />
      <input
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Digite um número"
      />
      <div>
        <button onClick={() => operacoes('adicao')}>Adição</button>
        <button onClick={() => operacoes('subtracao')}>Subtração</button>
        <button onClick={() => operacoes('multiplicacao')}>Multiplicação</button>
        <button onClick={() => operacoes('divisao')}>Divisão</button>
        <button onClick={() => operacoes('raiz')}>Raiz Quadrada</button>
        <button onClick={() => operacoes('exponencial')}>Exponenciação</button>
        <button onClick={limparCampos}>Limpar Campos</button>
      </div>
      {erro && <p>{erro}</p>}
      {resultado !== '' && <p>Resultado: {resultado}</p>}
    </div>
  );
}

export default Exercicio1;