import React from 'react'
import { voteAnecdote } from './../reducers/anecdoteReducer'
import { showNotification, removeNotification } from './../reducers/notificationReducer'
import Filter from './Filter'
import { connect } from 'react-redux'
import anecdoteService from './../services/anecdotes'

class AnecdoteList extends React.Component {
  handleVote = async (anecdote) => {
    await anecdoteService.update(anecdote)
    this.props.voteAnecdote(anecdote)
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
  const filtered = anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
  return filtered.sort((a, b) => b.votes - a.votes)
}

const mapStateToProps = (state) => {
  return {
    filteredAnecdotes: filterAndSortAnecdotes(state.anecdotes, state.filter)
  }
}

export default connect(
  mapStateToProps,
  { voteAnecdote,  showNotification, removeNotification }
)(AnecdoteList)