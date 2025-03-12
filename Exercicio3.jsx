import React, { useState } from 'react';
import CidadeCard from './CidadeCard';

function Exercicio3() {
  const [cidades, setCidades] = useState([
    { cidade: 'SP', tempMax: 30, tempMin: 20, descricao: 'Ensolarado', tempAtual: 25 },
    { cidade: 'RJ', tempMax: 35, tempMin: 25, descricao: 'Nublado', tempAtual: 28 },
    { cidade: 'BH', tempMax: 22, tempMin: 15, descricao: 'Nublado', tempAtual: 18 },
    { cidade: 'SC', tempMax: 28, tempMin: 18, descricao: 'Ensolarado', tempAtual: 22 }
  ])

  const [novaCidade, setNovaCidade] = useState('')
  const [tempMax, setTempMax] = useState('')
  const [tempMin, setTempMin] = useState('')
  const [descricao, setDescricao] = useState('')
  const [tempAtual, setTempAtual] = useState('')

  const adicionarCidade = () => {
    if (novaCidade && tempMax && tempMin && descricao && tempAtual) {
      setCidades([...cidades, { cidade: novaCidade, tempMax, tempMin, descricao, tempAtual }])
      setNovaCidade('')
      setTempMax('')
      setTempMin('')
      setDescricao('')
      setTempAtual('')
    }
  }

  const mostrarAlerta = (tempAtual) => {
    alert(`Temperatura Atual: ${tempAtual}`)
  }

  return (
    <div>
      <h2>Clima Tempo</h2>
      <p>Data de hoje: {new Date().toLocaleDateString()}</p>
      <div>
        <input
          type="text"
          value={novaCidade}
          onChange={(e) => setNovaCidade(e.target.value)}
          placeholder="Cidade"
        />
        <input
          type="text"
          value={tempMax}
          onChange={(e) => setTempMax(e.target.value)}
          placeholder="Temp Maxima"
        />
        <input
          type="text"
          value={tempMin}
          onChange={(e) => setTempMin(e.target.value)}
          placeholder="Temp Minima"
        />
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descricao"
        />
        <input
          type="text"
          value={tempAtual}
          onChange={(e) => setTempAtual(e.target.value)}
          placeholder="Temp Atual"
        />
        <button onClick={adicionarCidade}>Adicionar Cidade</button>
      </div>
      <div className="cards-container">
        {cidades.map((cidade, index) => (
          <CidadeCard
            key={index}
            cidade={cidade.cidade}
            tempMax={cidade.tempMax}
            tempMin={cidade.tempMin}
            descricao={cidade.descricao}
            tempAtual={cidade.tempAtual}
            mostrarAlerta={mostrarAlerta}
            />
        ))}
        </div>
    </div>
    );
}

export default Exercicio3;