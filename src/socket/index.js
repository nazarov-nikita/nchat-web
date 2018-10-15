import io from 'socket.io-client'

const initSocket = (dispatch) => {
  const socket = io('https://nikkita.ru:3000')
  dispatch({ type: 'CREATE_SOCKET', payload: socket })

  socket.on('connect', () => {
    console.log('connect')
    dispatch({ type: 'SOCKET_CONNECTED' })
  })

  socket.on('disconnect', () => {
    console.log('disconnect')
    dispatch({ type: 'SOCKET_DISCONNECTED' })
  })

  socket.on('users.info', data => {
    dispatch({
      type: 'USERS_UPDATE',
      payload: data
    })
  })

  socket.on('users.added', data => {
    dispatch({
      type: 'USERS_ADD',
      payload: data
    })
  })

  socket.on('users.removed', data => {
    dispatch({
      type: 'USERS_REMOVE',
      payload: data
    })
  })

  socket.on('message.created', data => {
    dispatch({
      type: 'MESSAGES_ADD',
      payload: data
    })
  })

  socket.on('message.info', data => {
    dispatch({
      type: 'MESSAGES_UPDATE',
      payload: data
    })
  })

  socket.on('error', error => {
    console.log(error)
  })
  return socket
}

export default initSocket
