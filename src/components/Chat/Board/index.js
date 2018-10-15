import React from 'react'
import { connect } from 'react-redux'

import Message from './Message'

import './style.css'

const Board = ({ messages }) => (
  <section className='chatBoard'>
    {messages.map(message => (<Message from={message.from} createdAt={message.createdAt} text={message.text} key={message.id} />))}
  </section>
)

export default connect(
  state => ({ messages: state.messages })
)(Board)
