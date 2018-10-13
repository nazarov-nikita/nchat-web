import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

const LogoutButton = ({ socket }) => {
  return (<Button bsStyle='link' onClick={logout({ socket })}>logout</Button>)
}

export default connect(
  state => ({ socket: state.socket })
)(LogoutButton)

function logout ({ socket }) {
  return (values) => {
    const req = new window.XMLHttpRequest()
    req.open('GET', 'https://nikkita.ru:3000/logout', true)
    req.withCredentials = true
    req.onreadystatechange = function () {
      socket.manager.disconnect()
    }
    req.send()
  }
}
