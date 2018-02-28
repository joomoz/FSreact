const notificationReducer = (state = 'Everything is ok?!', action) => {
  // console.log(action)
  switch (action.type) {
    case 'NOTIFICATION':
      return action.notification
    default:
      return state
  }
}

export const showNotification = (message) => {
  return {
    type: 'NOTIFICATION',
    notification: message
  }
}

export const removeNotification = () => {
  return {
    type: 'NOTIFICATION',
    notification: ''
  }
}

export default notificationReducer