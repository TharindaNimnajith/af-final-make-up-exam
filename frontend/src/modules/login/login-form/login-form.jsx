import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {Card, CardBody} from 'reactstrap'
import axios from 'axios'
import {authApi, authStoreKey} from '../../../configurations/configurations'
import {setLocalStorageItem} from '../../../helpers/local-storage.helpers'
import {isEmpty} from '../../../helpers/common.helpers'
import {AppContext} from '../../../context-api/app-context'
import Loader from '../../../components/loader/loader'
import TextField from '../../../components/text-field/text-field'
import ButtonComponent from '../../../components/button/button'
import './login-form.css'

const LoginForm = (props) => {
  const appContext = useContext(AppContext)

  let helperEmail = 'Please enter your email address.'
  let helperPassword = 'Please enter your password.'

  const [loader, setLoader] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')

  const [emailValid, setEmailValid] = useState(false)
  const [passwordValid, setPasswordValid] = useState(false)

  const onChangeEmail = (event) => {
    setEmail(event.value)
    setEmailValid(event.eventInfo.target.validity.valid && !isEmpty(event.value))
    setErrorEmail('')
    if (!event.eventInfo.target.validity.valid)
      setErrorEmail('Please enter a valid email address.')
    console.log(errorEmail)
  }

  const onChangePassword = (event) => {
    setPassword(event.value)
    setPasswordValid(event.eventInfo.target.validity.valid && !isEmpty(event.value))
    setErrorPassword('')
    if (!event.eventInfo.target.validity.valid)
      setErrorPassword('Please enter a valid password.')
  }

  const onSubmit = () => {
    const data = {
      email,
      password
    }
    axios.post(`${authApi}login`, data).then(res => {
      setLoader(true)
      if (res.status === 200) {
        setLoader(false)
        setLocalStorageItem(authStoreKey, res.data)
        appContext.login(res.data)
        props.history.push('/')
      } else {
        setLoader(false)
      }
    }).catch(err => {
      setLoader(false)
      console.error(err)
    })
  }

  return (
    <div className='login-wrapper'>
      {
        loader ? (
          <Loader/>
        ) : null
      }
      <Card className='overflow-hidden'>
        <div className='login-header'>
          <div className='text-primary text-center p-4'>
            <h1 className='text-white font-size-20 text-uppercase'>
              <i className='login-icon fas fa-users mt-2'/>
              <span className='ms-3'>
                  Login
                </span>
            </h1>
          </div>
        </div>
        <CardBody className='p-4'>
          <div className='p-3'>
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
            <div className='text-center mt-4 mb-3'>
              <ButtonComponent btnText={'Login'}
                               isFullWidth={false}
                               elementStyle={'login-btn'}
                               disabled={!emailValid || !passwordValid}
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
  )
}

export default LoginForm
