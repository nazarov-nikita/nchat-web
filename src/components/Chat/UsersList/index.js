import React from 'react'
import { connect } from 'react-redux'

import User from './User'

import './style.css'

const UsersList = ({ users = {}, className }) => (
  <aside className={`${className} chatUsersList`}>
    {Object.keys(users).map(socketId => (<User key={users[socketId].name} name={users[socketId].name} />))}
  </aside>
)

export default connect(
  state => ({ users: state.users })
)(UsersList)
