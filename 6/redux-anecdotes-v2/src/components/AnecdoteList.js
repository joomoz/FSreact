import React from 'react'
import { voteAnectode } from './../reducers/anecdoteReducer'
import { showNotification, removeNotification } from './../reducers/notificationReducer'
import Filter from './Filter'
import { connect } from 'react-redux'

class AnecdoteList extends React.Component {
  handleVote = (anecdote) => {
    this.props.voteAnectode(anecdote)
    this.props.showNotification(`anecdote '${anecdote.content}' voted`)
    setTimeout(() => {
      this.props.removeNotification()
    }, 5000)
  }

  render() {
    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter />
        {this.props.filteredAnecdotes.map(anecdote =>
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

const filterAndSortAnecdotes = (anecdotes, filter) => {
  const filtered = anecdotes.filter(a => a.content.includes(filter))
  filtered.sort((a, b) => b.votes - a.votes)
  return filtered
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    filteredAnecdotes: filterAndSortAnecdotes(state.anecdotes, state.filter)
  }
}

export default connect(
  mapStateToProps,
  { voteAnectode,  showNotification, removeNotification }
)(AnecdoteList)