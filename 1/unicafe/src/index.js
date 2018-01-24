import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  annaHyvaPalaute = () => {
    this.setState({ hyva: this.state.hyva + 1 })
  }

  annaNeutraaliPalaute = () => {
    this.setState({ neutraali: this.state.neutraali + 1 })
  }

  annaHuonoPalaute = () => {
    this.setState({ huono: this.state.huono + 1 })
  }

  render() {
    return (
      <div>
        <div><h2>anna palautetta</h2></div>
        <div>
          <Button
            handleClick={this.annaHyvaPalaute}
            text="hyvä"
          />
          <Button
            handleClick={this.annaNeutraaliPalaute}
            text="neutraali"
          />
          <Button
            handleClick={this.annaHuonoPalaute}
            text="huono"
          />
        </div>
        <div><h2>statistiikka</h2></div>
        <div>
          <Statistics 
            hyva={this.state.hyva}
            neutraali={this.state.neutraali}
            huono={this.state.huono}
          />
        </div>
      </div>
    )
  }
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
    {text}
  </button>
  )
}

const Statistics = ({hyva, neutraali, huono}) => {
  const ka = (hyva - huono) / (hyva + neutraali + huono)
  const positiivisia = hyva / (hyva + neutraali + huono)
  return (
    <div>
      <Statistic desc="hyvä" value={hyva} />
      <Statistic desc="neutraali" value={neutraali} />
      <Statistic desc="huono" value={huono} />
      <Statistic desc="keskiarvo" value={((isNaN(ka)) ? 0 : ka).toFixed(1)} />
      <Statistic desc="positiivisia" value={((isNaN(positiivisia)) ? 0 : positiivisia*100).toFixed(1)} desc2="%"/>
    </div>
  )
}

const Statistic = ({desc, value, desc2}) => {
  return (
    <div>
      <p>{desc}: {value} {desc2}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

