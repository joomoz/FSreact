import React from 'react'
import { voteAnectode } from './../reducers/anecdoteReducer'

class AnecdoteList extends React.Component {
  handleVote = (anectode) => {
    this.props.store.dispatch(voteAnectode(anectode))
  }

  render() {
    const anecdotes = this.props.store.getState()
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => this.handleVote(anecdote)} >
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
