const notificationReducer = (state = 'notifikaatio!', action) => {
  switch (action.type) {
    case 'NOTIFICATION':
      return action.notification
    default:
      return state
  }
}

export default notificationReducer