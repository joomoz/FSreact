const reducer = (state = [], action) => {
  // console.log('ACTION: ', action)
  switch (action.type) {
    case 'INIT':
      return action.data
    case 'VOTE': {
      const old = state.filter(a => a.id !== action.id)
      const voted = state.find(a => a.id === action.id)
      return [...old, { ...voted, votes: voted.votes + 1 } ]
    }
    case 'CREATE':
      return [...state, action.data]
    default:
      return state
  }
}

export const anecdoteInitialization = (data) => {
  return {
    type: 'INIT',
    data
  }
}

export const anecdoteCreation = (content) => {
  return {
    type: 'CREATE',
    content
  }
}

export const voteAnecdote = (anecdote) => {
  return {
    type: 'VOTE',
    id: anecdote.id
  }
}

export default reducer