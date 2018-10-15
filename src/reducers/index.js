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
    return {
      ...state,
      connected: true
    }
  }
  if (action.type === 'SOCKET_DISCONNECTED') {
    return {
      ...state,
      connected: false
    }
  }
  return state
}

const users = (state = {}, action) => {
  if (action.type === 'USERS_ADD') {
    return {
      ...state,
      [action.payload.name]: action.payload
    }
  }
  if (action.type === 'USERS_UPDATE') {
    return { ...action.payload }
  }
  if (action.type === 'USERS_REMOVE') {
    const _state = { ...state }
    Object.keys(_state).forEach(index => { if (_state[index].socketId === action.payload.socketId) { return delete _state[index] } })
    return _state
  }
  return state
}

const messages = (state = [], action) => {
  if (action.type === 'MESSAGES_ADD') {
    return [
      ...state,
      action.payload
    ]
  }
  if (action.type === 'MESSAGES_UPDATE') {
    return [ ...action.payload ]
  }
  return state
}

const reducers = combineReducers({
  socket,
  users,
  messages,
  form: formReducer
})

export default reducers
