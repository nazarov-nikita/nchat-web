function register ({ socket }) {
  return values => {
    const req = new window.XMLHttpRequest()
    if (values.passwordField !== values.repeatPasswordField) return console.log('Passwords Dont Match')
    const body = JSON.stringify({
      email: values.emailField,
      password: values.passwordField
    })
    req.open('POST', 'https://nikkita.ru:3000/reg', true)
    req.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    req.withCredentials = true
    req.onreadystatechange = function () {
      if (this.readyState !== 4) return
      const response = JSON.parse(this.responseText)
      if (response.code !== 200) return console.log('response', response)
      socket.manager.disconnect()
      socket.manager.open()
    }
    req.send(body)
  }
}

export default register
