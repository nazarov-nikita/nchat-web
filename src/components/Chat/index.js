import React from 'react'
import { connect } from 'react-redux'

import Board from './Board'
import UsersList from './UsersList'
import ChatInput from './ChatInput'
import TopPanel from './TopPanel'

import './style.css'

const Chat = ({ socket }) => {
  return (
    <div className='chat'>
      <TopPanel className='topPanel' />
      <Board className='chatBoard' />
      <UsersList className='chatUsersListDesktop' />
      <UsersList className='chatUsersListMobile' />
      <ChatInput className='chatInput' />
    </div>
  )
}

export default connect(
  state => ({ socket: state.socket })
)(Chat)
