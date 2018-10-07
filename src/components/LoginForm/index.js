import React from 'react'

import LoginForm from './LoginForm'

function login (values) {
  const req = new window.XMLHttpRequest()
  const body = JSON.stringify({
    email: values.emailField,
    password: values.passwordField
  })
  req.open('POST', 'http://nikkita.ru:3000/login', true)
  req.setRequestHeader('Content-type', 'application/json; charset=utf-8')
  req.onreadystatechange = function () {
    if (this.readyState !== 4) return
    const response = JSON.parse(this.responseText)
    if (response.code !== 200) return console.log('response', response)
    console.log('response', response.message)
  }
  req.send(body)
}

const Wrap = () => {
  return <LoginForm onSubmit={login} />
}

export default Wrap
