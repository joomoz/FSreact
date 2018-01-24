import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: new Array(anecdotes.length).fill(0)
    }
  }

  randomAnectode = () => {
    return () => {
      this.setState({selected: Math.floor((Math.random() * anecdotes.length))})
    }
  }

  voteAnectode = () => {
    const copyOfVotes = this.state.votes.slice()
    copyOfVotes[this.state.selected]++
    return () => {
      this.setState({votes: copyOfVotes})
    }
  }

  bestAnectode = () => {
    const votes = this.state.votes.slice()
    let best = 0

    votes.forEach((vote, i) => {
      if(vote > votes[best]) {
        best = i
      }
    })

    return best
  }

  render() {
    return (
      <div>
        <h4>{this.props.anecdotes[this.state.selected]}</h4>
        <p>has {this.state.votes[this.state.selected]} votes</p>
        <Button text="Give me moooar!" handleClick={this.randomAnectode()} />
        <Button text='vote' handleClick={this.voteAnectode()} />
        <BestAnectode 
          anectode={this.props.anecdotes[this.bestAnectode()]}
          votes={this.state.votes[this.bestAnectode()]}
        />
      </div>
    )
  }
}

const BestAnectode = ({anectode, votes}) => {
  return (
    <div>
      <h4>anectode with most votes:</h4>
      <p>{anectode}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)