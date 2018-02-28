import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  console.log('ACTION: ', action)
  switch (action.type) {
    case 'INIT':
      return action.data
    case 'VOTE': {
      return state.map((a) => a.id !== action.data.id ? a : action.data)
    }
    case 'CREATE':
      return [...state, action.data]
    default:
      return state
  }
}

export const anecdoteInitialization = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT',
      data: anecdotes
    })
  }
}

export const anecdoteCreation = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'CREATE',
      data: newAnecdote
    })
  }
}

export const voteAnecdote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.update(anecdote)
    dispatch({
      type: 'VOTE',
      data: updatedAnecdote
    })
  }
}

export default reducer