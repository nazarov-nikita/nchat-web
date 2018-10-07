import React from 'react'
import { Route, Switch } from 'react-router'
// import { connect } from 'react-redux'

import App from './components/App'
import NotFound from './components/NotFound/NotFound'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
// import SocketConnecting from './components/SocketConnecting'

const Routes = ({ state }) => {
  return (
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/login' component={LoginForm} />
      <Route exact path='/registration' component={RegistrationForm} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
