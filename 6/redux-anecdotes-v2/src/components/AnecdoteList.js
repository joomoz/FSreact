import React from 'react'
import { voteAnectode } from './../reducers/anecdoteReducer'
import { showNotification, removeNotification } from './../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  handleVote = (anecdote) => {
    this.props.store.dispatch(voteAnectode(anecdote))
    this.props.store.dispatch(showNotification(`anecdote '${anecdote.content}' voted`))
    setTimeout(() => {
      this.props.store.dispatch(removeNotification())
    }, 5000)
  }

  render() {
    const anecdotes = this.props.store.getState().anecdotes

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
