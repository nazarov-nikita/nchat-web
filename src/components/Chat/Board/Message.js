import React from 'react'

const Message = ({ from, createdAt, text }) => (
  <div className='chatMessage'>
    <span className='messageFrom'>{`${from}`}</span>
    <span className='messageText'>{text}</span>
    <span className='messageCreatedAt'>{`${dateToShort(createdAt)} `}</span>
  </div>
)

export default Message

function dateToShort (timestamp) {
  const date = new Date(parseInt(timestamp))
  const time = []
  time.push(date.getHours())
  time.push(date.getMinutes())
  time.push(date.getSeconds())
  return `${time.join(':')}`
}
