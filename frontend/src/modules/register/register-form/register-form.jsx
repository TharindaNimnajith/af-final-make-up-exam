import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Card, CardBody} from 'reactstrap'
import Loader from '../../../components/loader/loader'
import TextField from '../../../components/text-field/text-field'
import ButtonComponent from '../../../components/button/button'
import './register-form.css'

const RegisterForm = () => {
  let errorFirstName = ''
  let errorLastName = ''
  let errorEmail = ''
  let errorPassword = ''
  let errorConfirmPassword = ''

  const [loader, setLoader] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const onChangeFirstName = (event) => {
    setFirstName(event.value)
  }

  const onChangeLastName = (event) => {
    setLastName(event.value)
  }

  const onChangeEmail = (event) => {
    setEmail(event.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.value)
  }

  const onChangeConfirmPassword = (event) => {
    setConfirmPassword(event.value)
  }

  const onSubmit = () => {
    console.log(firstName)
    console.log(lastName)
    console.log(email)
    console.log(password)
    console.log(confirmPassword)
  }

  return (
    <div className='container-fluid'>
      {
        loader ? (
          <Loader/>
        ) : null
      }
      <div className='login-wrapper'>
        <Card className='overflow-hidden'>
          <div className='login-header'>
            <div className='text-primary text-center p-4'>
              <h1 className='text-white font-size-20 text-uppercase'>
                Register
              </h1>
              <i className='register-icon fas fa-user-plus mt-2'/>
            </div>
          </div>
          <CardBody className='p-4'>
            <div className='p-3'>
              <TextField isRequired={true}
                         labelText={'First Name'}
                         name={'firstName'}
                         value={firstName}
                         errorText={errorFirstName}
                         onChangeFn={(event) => onChangeFirstName(event)}/>
              <TextField isRequired={true}
                         labelText={'Last Name'}
                         name={'lastName'}
                         value={lastName}
                         errorText={errorLastName}
                         onChangeFn={(event) => onChangeLastName(event)}/>
              <TextField isRequired={true}
                         labelText={'Email'}
                         name={'email'}
                         value={email}
                         errorText={errorEmail}
                         onChangeFn={(event) => onChangeEmail(event)}/>
              <TextField isRequired={true}
                         labelText={'Password'}
                         type={'password'}
                         name={'password'}
                         value={password}
                         errorText={errorPassword}
                         onChangeFn={(event) => onChangePassword(event)}/>
              <TextField isRequired={true}
                         labelText={'Confirm Password'}
                         type={'confirmPassword'}
                         name={'confirmPassword'}
                         value={confirmPassword}
                         errorText={errorConfirmPassword}
                         onChangeFn={(event) => onChangeConfirmPassword(event)}/>
              <div className='text-center mt-4 mb-3'>
                <ButtonComponent btnText={'Register'}
                                 isFullWidth={false}
                                 elementStyle={'register-btn'}
                                 onClickFn={onSubmit}/>
              </div>
            </div>
            <div className='ms-3'>
              <label>Already have an account?&nbsp;</label>
              <Link to={'/login'}>
                <label className='login-link'>
                  Login
                </label>
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default RegisterForm
