import React from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router'
import { connect } from 'react-redux'

import App from './App'
import Chat from './Chat'
import NotFound from './NotFound/NotFound'
import Login from './Login'
import Registration from './Registration'

const Routes = ({ socket }) => {
  if (!socket) return <div />
  if (socket.connected) {
    return (
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/chat' component={Chat} />
        <Redirect from='/login' to='/' />
        <Redirect from='/registration' to='/' />
        <Route component={NotFound} />
      </Switch>
    )
  } else {
    return (
      <Switch>
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/login' component={Login} />
        <Redirect from='/' to='/login' />
        <Redirect from='/chat' to='/login' />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default withRouter(connect(
  state => ({ socket: state.socket })
)(Routes))
