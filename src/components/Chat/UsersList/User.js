import React from 'react'

import '../../../Images/ghost.png'

const User = ({ name }) => (
  <div className='chatUser'>
    <img className='chatUserLogo' src='../../../Images/ghost.png' />
    <span className='chatUserName'>{name}</span>
  </div>
)

export default User
