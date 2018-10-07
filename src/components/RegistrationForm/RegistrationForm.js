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

import './style.css'

const ReduxFormControl = ({ input, ...props }) => (<FormControl {...props} {...input} />)

const FieldGroup = ({ id, label, type, placeholder }) => (
  <FormGroup
    controlId={id}
  >
    <ControlLabel htmlFor={id}>{label}</ControlLabel>
    <Field
      component={ReduxFormControl}
      name={id}
      type={type}
      placeholder={placeholder}
      required
    />
  </FormGroup>
)

let RegistrationForm = ({ handleSubmit }) => {
  return (
    <div id='registrationForm'>
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
        <FieldGroup
          id='repeatPasswordField'
          type='password'
          label='Repeat password'
          placeholder='Repeat password'
        />
        <Button type='submit' >Registration</Button>
        <Link to='/login'>
          <Button bsStyle='link'>Login</Button>
        </Link>
      </Form>
    </div>
  )
}

RegistrationForm = reduxForm({
  form: 'registrationForm'
})(RegistrationForm)

export default RegistrationForm
