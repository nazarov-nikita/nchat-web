import React from 'react'
import { connect } from 'react-redux'

import Board from './Board'
import UsersList from './UsersList'
import ChatInput from './ChatInput'
import LeftPanel from './LeftPanel'

import './style.css'

const Chat = ({ socket }) => {
  return (
    <div className='chat'>
      <LeftPanel className='leftPanel' />
      <Board className='chatBoard' />
      <UsersList className='chatUsersList' />
      <ChatInput className='chatInput' />
    </div>
  )
}

export default connect(
  state => ({ socket: state.socket })
)(Chat)
