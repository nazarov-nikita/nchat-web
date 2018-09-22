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

function RegistrationForm () {
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
        <FieldGroup
          id='repeatPasswordField'
          type='password'
          label='Repeat password'
          placeholder='Repeat password'
        />
        <Button>Registration</Button>
        <Link to='/login'>
          <Button bsStyle='link'>Login</Button>
        </Link>
      </Form>
    </div>
  )
}

export default RegistrationForm
