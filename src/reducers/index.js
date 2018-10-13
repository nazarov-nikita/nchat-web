import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const socket = (state = null, action) => {
  if (action.type === 'CREATE_SOCKET') {
    return {
      manager: action.payload,
      connected: false
    }
  }
  if (action.type === 'SOCKET_CONNECTED') {
    console.log('SOCKET_CONNECTED')
    return {
      ...state,
      connected: true
    }
  }
  if (action.type === 'SOCKET_DISCONNECTED') {
    console.log('SOCKET_DISCONNECTED')
    return {
      ...state,
      connected: false
    }
  }
  return state
}

const reducers = combineReducers({
  socket,
  form: formReducer
})

export default reducers
