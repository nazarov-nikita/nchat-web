import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Routes from './components/Routes'
import './style.css'
import reducers from './reducers'
import initSocket from './socket'

window.store = createStore(reducers)

initSocket(window.store.dispatch)

ReactDOM.render(
  <Provider store={window.store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
