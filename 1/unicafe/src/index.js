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
          <button onClick={this.annaHyvaPalaute}>
            hyvä
          </button>
          <button onClick={this.annaNeutraaliPalaute}>
            neutraali
          </button>
          <button onClick={this.annaHuonoPalaute}>
            huono
          </button>
        </div>
        <div><h2>statistiikka</h2></div>
        <div>
          <p>hyvä: {this.state.hyva}</p>
          <p>neutraali: {this.state.neutraali}</p>
          <p>huono: {this.state.huono}</p>
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


const Statistics = ({hyva, neutraali, huono}) => {
  const ka = (hyva - huono) / (hyva + neutraali + huono)
  const positiivisia = hyva / (hyva + neutraali + huono)
  return (
    <div>
      <p>keskiarvo: {((isNaN(ka)) ? 0 : ka).toFixed(1)}</p>
      <p>positiivisia: {((isNaN(positiivisia)) ? 0 : positiivisia*100).toFixed(1)} %</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

