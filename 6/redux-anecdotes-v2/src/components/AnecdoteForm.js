import React from 'react'
import { anectodeCreation } from './../reducers/anecdoteReducer'
import { showNotification, removeNotification } from './../reducers/notificationReducer'

class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    this.props.store.dispatch(anectodeCreation(content))

    e.target.anecdote.value = ''
    this.props.store.dispatch(showNotification(`anecdote '${content}' added`))
    setTimeout(() => {
      this.props.store.dispatch(removeNotification())
    }, 5000)
  }
  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

export default AnecdoteForm
