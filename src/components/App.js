import React from 'react'
import { Redirect } from 'react-router-dom'

const loggedIn = null

const App = () => (!loggedIn ? <Redirect to='/login' /> : <input />)

export default App
