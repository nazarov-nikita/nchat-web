import React from 'react'
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './style.css'

function FieldGroup ({ id, label, ...props }) {
  return (
    <FormGroup
      controlId={id}
    >
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  )
}

function LoginForm () {
  return (
    <div id='test'>
      <Form>
        <FieldGroup
          id='emailField'
          type='email'
          label='Email address'
          placeholder='Enter email'
        />
        <FieldGroup
          id='passwordField'
          type='password'
          label='Enter password'
          placeholder='Enter password'
        />
        <Button>Login</Button>
        <Link to='/registration'>
          <Button bsStyle='link'>Registration</Button>
        </Link>
      </Form>
    </div>
  )
}

export default LoginForm
