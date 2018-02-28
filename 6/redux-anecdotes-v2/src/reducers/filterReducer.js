const filterReducer = (state = '', action) => {
  // console.log(action)
  switch (action.type) {
    case 'FILTER':
      return action.filter
    default:
      return state
  }
}

export const updateFilter = (filter) => {
  return {
    type: 'FILTER',
    filter: filter
  }
}

export default filterReducer