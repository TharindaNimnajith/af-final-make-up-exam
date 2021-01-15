import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Card, CardBody} from 'reactstrap'
import Loader from '../../../components/loader/loader'
import TextField from '../../../components/text-field/text-field'
import ButtonComponent from '../../../components/button/button'
import './login-form.css'

const LoginForm = () => {
  let errorEmail = ''
  let errorPassword = ''

  const [loader, setLoader] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeEmail = (event) => {
    setEmail(event.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.value)
  }

  const onSubmit = () => {
    console.log(email)
    console.log(password)
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
              <h1 className='text-white font-size-20'>
                Sign In
              </h1>
              <i className='login-icon fas fa-users mt-2'/>
            </div>
          </div>
          <CardBody className='p-4'>
            <div className='p-3'>
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
              <div className='text-center mt-4 mb-3'>
                <ButtonComponent btnText={'Sign In'}
                                 isFullWidth={false}
                                 elementStyle={'login-btn'}
                                 onClickFn={onSubmit}/>
              </div>
            </div>
            <div className='ms-3'>
              <label>Don't have an account?&nbsp;</label>
              <Link to={'/register'}>
                <label className='register-link'>
                  Register
                </label>
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default LoginForm
