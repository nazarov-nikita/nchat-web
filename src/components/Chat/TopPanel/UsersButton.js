import React from 'react'
import { Button } from 'reactstrap'
import { connect } from 'react-redux'

const UsersButton = ({ users }) => (
  <Button
    onClick={toogleUsersList}
    className='usersButton'
    color='link'
  >
    {Object.keys(users).length}{users.length > 1 ? ' Users' : ' User'}
  </Button>
)


function toogleUsersList () {
  const usersList = document.getElementsByClassName('chatUsersListMobile')[0]
  if (window.getComputedStyle(usersList, null).display === 'none') {
    usersList.style.display = 'block'
  } else {
    usersList.style.display = 'none'
  }
}

export default connect(
  state => ({ users: state.users })
)((UsersButton))
