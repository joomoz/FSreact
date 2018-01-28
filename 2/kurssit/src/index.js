import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10,
        id: 1
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7,
        id: 2
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14,
        id: 3
      },
      {
        nimi: 'Quarter Stack',
        tehtavia: 66,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Kurssi kurssi={kurssi} />
    </div>
  )
}

const Kurssi = ({kurssi}) => {
  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osat={kurssi.osat}  />
      <Yhteensa osat={kurssi.osat} />  
    </div>
  )
}

const Otsikko = ({kurssi}) => {
  return (
    <div>
      <h1>{kurssi.nimi}</h1>
    </div>
  )
}

const Sisalto = ({osat}) => {

  return (
    <div>
      {osat.map(osa => <Osa key={osa.id} osa={osa}/>)}
    </div> 
  )
}

const Osa = ({osa}) => {
  return (
    <p>{osa.nimi} {osa.tehtavia}</p>
  )
}

const Yhteensa = ({osat}) => {
  //reduce!
  let total = osat.reduce((sum, osa) => {
    return sum + osa.tehtavia
  }, 0);

  return (
    <div>
      <p>yhteensä {total} tehtävää</p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)