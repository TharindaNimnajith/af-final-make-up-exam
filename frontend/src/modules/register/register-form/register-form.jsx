import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Card, CardBody} from 'reactstrap'
import axios from 'axios'
import {usersApi} from '../../../configurations/configurations'
import Loader from '../../../components/loader/loader'
import TextField from '../../../components/text-field/text-field'
import ButtonComponent from '../../../components/button/button'
import './register-form.css'

const RegisterForm = (props) => {
  let helperFirstName = ''
  let helperLastName = ''
  let helperEmail = ''
  let helperPassword = ''
  let helperConfirmPassword = ''

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
    const data = {
      firstName,
      lastName,
      email,
      password
    }

    axios.post(`${usersApi}users`, data).then(res => {
      setLoader(true)
      if (res.status === 201) {
        setLoader(false)
        props.history.push('/login')
      } else {
        setLoader(false)
      }
    }).catch(err => {
      setLoader(false)
      console.error(err)
    })
  }

  return (
    <div className='register-wrapper'>
      {
        loader ? (
          <Loader/>
        ) : null
      }
      <Card className='overflow-hidden'>
        <div className='register-header'>
          <div className='text-primary text-center p-4'>
            <h1 className='text-white font-size-20 text-uppercase'>
              <i className='register-icon fas fa-user-plus mt-2'/>
              <span className='ms-3'>
                  Register
                </span>
            </h1>
          </div>
        </div>
        <CardBody className='p-4'>
          <div className='p-3'>
            <div>
              <TextField isRequired={true}
                         labelText={'First Name'}
                         name={'firstName'}
                         value={firstName}
                         errorText={errorFirstName}
                         helperText={helperFirstName}
                         onChangeFn={(event) => onChangeFirstName(event)}/>
            </div>
            <div>
              <TextField isRequired={true}
                         labelText={'Last Name'}
                         name={'lastName'}
                         value={lastName}
                         errorText={errorLastName}
                         helperText={helperLastName}
                         onChangeFn={(event) => onChangeLastName(event)}/>
            </div>
            <div>
              <TextField isRequired={true}
                         labelText={'Email'}
                         type={'email'}
                         name={'email'}
                         value={email}
                         errorText={errorEmail}
                         helperText={helperEmail}
                         onChangeFn={(event) => onChangeEmail(event)}/>
            </div>
            <div>
              <TextField isRequired={true}
                         labelText={'Password'}
                         type={'password'}
                         name={'password'}
                         value={password}
                         errorText={errorPassword}
                         helperText={helperPassword}
                         onChangeFn={(event) => onChangePassword(event)}/>
            </div>
            <div>
              <TextField isRequired={true}
                         labelText={'Confirm Password'}
                         type={'password'}
                         name={'confirmPassword'}
                         value={confirmPassword}
                         errorText={errorConfirmPassword}
                         helperText={helperConfirmPassword}
                         onChangeFn={(event) => onChangeConfirmPassword(event)}/>
            </div>
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
  )
}

export default RegisterForm
