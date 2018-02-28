const notificationReducer = (state = '', action) => {
  // console.log(action)
  switch (action.type) {
    case 'NOTIFICATION':
      return action.notification
    default:
      return state
  }
}

export const notify = (message, seconds) => {
  return async (dispatch) => {
    dispatch({
      type: 'NOTIFICATION',
      notification: message
    })

    setTimeout(() => {
      dispatch({
        type: 'NOTIFICATION',
        notification: ''
      })
    }, seconds * 1000)
  }
}

export default notificationReducer