import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Placar } from './components/Placar'
import { Cards, ListarCard } from './components/Cards'
import { CardNaruto } from './components/CardNaruto'

function App() {

  // const pontuacaoTime1 = 21;
  // const pontuacaoTime2 = 20;
  // const time1 = "Aquele que não deve ser anunciado";
  // const time2 = "Aquele que não deve ser visto";

  // function exibirMensagem() {
  //   if (pontuacaoTime1 > 20) {
  //     return <b>Você é o campeão</b>
  //   } else if (pontuacaoTime1 > 15) {
  //     return <i>Você está quase lá</i>
  //   } else if (pontuacaoTime1 > 10) {
  //     return <i>Continue, não desista!</i>
  //   } else {
  //     return <p>Falta começar</p>
  //   }
  // }

  const frutas = [{
    nome: "Pera",
    valor: 1.99,
    peso: 50
  }, {
    nome: "Maçã",
    valor: 2.99,
    peso: 35
  }, {
    nome: "Banana",
    valor: 3.5,
    peso: 10
  }, {
    nome: "Uva",
    valor: 15.8,
    peso: 5
  }, {
    nome: "Manga",
    valor: 12.5,
    peso: 100
  }];

  return (
    <>
      {/* <header>Cabeçalho</header>
      <div>
        <span>A pontuação do time <span style={{
          color: pontuacaoTime1 > pontuacaoTime2 ? 'green' : 'red'
        }}>{time1}</span> é {pontuacaoTime1}</span>
        <br />
        <span>A pontuação do time <span style={{
          color: pontuacaoTime2 > pontuacaoTime1 ? 'green ' : 'red'
        }}>{time2}</span> é {pontuacaoTime2}</span>
        <br />
        {pontuacao > 20 ? <b>Você é o campeão</b> : <i>Você é o perdedor</i>}
        {exibirMensagem()}
        {pontuacaoTime1 === pontuacaoTime2 && <b>Hoube empate</b>}
      </div> */}

      {/* <ul>
        {frutas.map(fruta => (
          <li>
            <span>Nome: {fruta.nome}</span>{" "}
            <span>R$: {fruta.valor}</span>{" "}
            <span>Kg: {fruta.peso}</span>
          </li>
        ))}

        {frutas.join(", ")}
      </ul> */}

      {/* <h2>Rodada 1</h2>
      <Placar pontuacao1={20} pontuacao2={30} />

      <h2>Rodada 2</h2>
      <Placar pontuacao1={40} pontuacao2={35}  disabled={true}/> */}

      {/* <Cards titulo={"teste"} descricao={"tentando não errar"} img={"../public/vite.svg"} tipo={"oi"} desabilitado={true}/> */}

      {/* <ul>
        {ListarCard()}
      </ul> */}

      {/* <p className='text-red-600'>Hello how are you?</p> */}

      <CardNaruto/>
    </>
  )
}

export default App
