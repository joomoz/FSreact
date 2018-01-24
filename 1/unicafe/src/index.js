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

  annaPalaute = (valinta) => {
    return () => {
      this.setState({ [valinta]: this.state[valinta] +1 })
    }
  }

  render() {
    return (
      <div>
        <div><h2>anna palautetta</h2></div>
        <div>
          <Button
            handleClick={this.annaPalaute("hyva")}
            text="hyvä"
          />
          <Button
            handleClick={this.annaPalaute("neutraali")}
            text="neutraali"
          />
          <Button
            handleClick={this.annaPalaute("huono")}
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
  
  if(hyva === 0 && huono === 0 && neutraali === 0) {
    return ( 
      <p>ei palautteita</p>
    )
  } else {
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
}

const Statistic = ({desc, value, desc2}) => {
  return (
    <div>
      <p>{desc}: {value} {desc2}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

