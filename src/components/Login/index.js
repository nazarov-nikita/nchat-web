import React from 'react'
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import login from './login'

import './style.css'

const ReduxFormControl = ({ input, ...props }) => (<FormControl {...props} {...input} />)

function FieldGroup ({ id, label, placeholder, type }) {
  return (
    <FormGroup
      controlId={id}
    >
      <ControlLabel>{label}</ControlLabel>
      <Field
        component={ReduxFormControl}
        name={id}
        type={type}
        placeholder={placeholder}
        required
      />
    </FormGroup>
  )
}

let LoginForm = ({ handleSubmit }) => {
  return (
    <div id='test'>
      <Form onSubmit={handleSubmit}>
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
        <Button type='submit'>Login</Button>
        <Link to='/registration'>
          <Button bsStyle='link'>Registration</Button>
        </Link>
      </Form>
    </div>
  )
}

LoginForm = reduxForm({
  form: 'registrationForm'
})(LoginForm)

const Login = ({ socket }) => (<LoginForm onSubmit={login({ socket })} />)

export default connect(
  state => ({ socket: state.socket })
)(Login)
