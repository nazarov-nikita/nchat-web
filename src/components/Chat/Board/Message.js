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
  const to2Digits = (number) => (number.toString().length > 1 ? number : '0' + number)
  time.push(to2Digits(date.getHours()))
  time.push(to2Digits(date.getMinutes()))
  time.push(to2Digits(date.getSeconds()))
  return `${time.join(':')}`
}
