import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osat = ['Reactin perusteet', 'Tiedonvälitys propseilla', 'Komponenttien tila']
  const tehtavat = [10, 7, 4]

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osa={osat} tehtavat={tehtavat} />
      <Yhteensa tehtavat={tehtavat} />  
    </div>
  )
}

const Otsikko = (props) => {
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
  )
}

const Sisalto = (props) => {
  return (
    <div>
      <Osa osa={props.osa[0]} teht={props.tehtavat[0]}/>
      <Osa osa={props.osa[1]} teht={props.tehtavat[1]}/>
      <Osa osa={props.osa[2]} teht={props.tehtavat[2]}/>
    </div>
  )
}

const Osa = (props) => {
  return (
    <p>{props.osa} {props.teht}</p>
  )
}

const Yhteensa = (props) => {
  return (
    <div>
      <p>yhteensä {props.tehtavat[0] + props.tehtavat[1] + props.tehtavat[2]} tehtävää</p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)