import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Routes from './Routes'
import './style.css'

const history = createBrowserHistory()

// import io from 'socket.io-client'
// const socket = io('http://nikkita.ru:3000/')

const reducer = (state = {}, action) => {
  return state
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
