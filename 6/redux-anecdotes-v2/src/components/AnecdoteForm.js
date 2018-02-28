import React from 'react'
import { anectodeCreation } from './../reducers/anecdoteReducer'
import { showNotification, removeNotification } from './../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    this.props.anectodeCreation(content)

    e.target.anecdote.value = ''
    this.props.showNotification(`anecdote '${content}' added`)
    setTimeout(() => {
      this.props.removeNotification()
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

export default connect(
  null,
  { anectodeCreation, showNotification, removeNotification }
)(AnecdoteForm)