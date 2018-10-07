import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const socket = (state = null, action) => {
  if (action.type === 'SET_SOCKET') {
    return {
      ...state,
      socket: action.payload
    }
  }
  return state
}

const reducers = combineReducers({
  socket,
  form: formReducer
})

export default reducers
