// import io from 'socket.io-client'
// const socket = io('http://nikkita.ru:3000/')
import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

function HelloText (props) {
  return (
    <div>
      <h1>Hello {props.text}!</h1>
    </div>
  )
}

ReactDOM.render(<HelloText text='world' />, document.getElementById('root'))
