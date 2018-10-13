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
  socket.on('error', error => {
    console.log(error)
  })
  return socket
}

export default initSocket
