import React from 'react'
import { withRouter } from 'react-router'
import { Button } from 'react-bootstrap'

import LogoutButton from '../../LogoutButton'
import UsersButton from './UsersButton'

import './style.css'

const TopPanel = () => (
  <nav className='topPanel'>
    <UsersButton />
    {/* <RedirectButton redirect='/test' /> */}
    <LogoutButton />
  </nav>
)

const RedirectButton = withRouter(({ history, redirect }) => (<Button bsStyle='link' className='topPanelRightButtons' onClick={() => { history.push('/test') }}>Test</Button>))

export default TopPanel
