import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'
import io from 'socket.io-client'

import Routes from './Routes'
import './style.css'
import reducers from './reducers'
import RegistrationForm from './components/RegistrationForm'

const store = createStore(reducers)

// const socket = io('http://nikkita.ru:3000/')
// socket.on('connect', () => {
//   store.dispatch({ type: 'SET_SOCKET', payload: socket })
// })

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
