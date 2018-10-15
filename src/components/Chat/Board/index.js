import React from 'react'
import { connect } from 'react-redux'

import Message from './Message'

import './style.css'

function scrollToDown () {
  const board = document.getElementsByClassName('chatBoard')[0]
  board.scrollTop = board.scrollHeight
}

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isSrolled: false
    }
  }

  render () {
    const { messages } = this.props
    return (
      <section className='chatBoard'>
        {messages.map(message => (<Message from={message.from} createdAt={message.createdAt} text={message.text} key={message.id} />))}
      </section>
    )
  }

  componentDidMount () {
    scrollToDown()
  }

  getSnapshotBeforeUpdate () {
    const board = document.getElementsByClassName('chatBoard')[0]
    if (board.scrollHeight - board.scrollTop === board.clientHeight) {
      this.state.isSrolled = true
    } else {
      this.state.isSrolled = false
    }
    return null
  }

  componentDidUpdate () {
    if (this.state.isSrolled) {
      scrollToDown()
    }
  }
}

export default connect(
  state => ({ messages: state.messages })
)(Board)
