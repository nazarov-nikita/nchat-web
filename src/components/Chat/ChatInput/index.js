import React from 'react'
import { Field, reduxForm, reset } from 'redux-form'
import { connect } from 'react-redux'

import './style.css'

let FormSendMessage = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} className='chatInput'>
    <Field component='input' name='chatInput' autoComplete='off' required />
  </form>
)

FormSendMessage = reduxForm({
  form: 'sendMessage'
})(FormSendMessage)

let ChatInput = ({ socket, dispatch }) => (<FormSendMessage onSubmit={onSubmit({ socket, dispatch })} />)

ChatInput = connect(
  state => ({ socket: state.socket.manager, dispatch: state.dispatch }),
  dispatch => ({ dispatch })
)(ChatInput)

function onSubmit ({ socket, dispatch }) {
  return data => {
    socket.emit('message.send', {
      text: data.chatInput
    })
    dispatch(reset('sendMessage'))
  }
}

export default ChatInput
