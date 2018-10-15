import React from 'react'
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import login from './login'

import './style.css'

const ReduxInput = ({ input, ...props }) => (<Input {...props} {...input} />)

function FieldGroup ({ id, label, placeholder, type }) {
  return (
    <FormGroup
      id={id}
    >
      <Label>{label}</Label>
      <Field
        component={ReduxInput}
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
    <div id='loginForm'>
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
        <Button color='primary' type='submit'>Login</Button>
        <Link to='/registration'>
          <Button color='link'>Registration</Button>
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
