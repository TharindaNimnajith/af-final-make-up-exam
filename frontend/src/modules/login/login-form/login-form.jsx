import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {Card, CardBody} from 'reactstrap'
import axios from 'axios'
import {authApi, authStoreKey} from '../../../configs/config'
import {setLocalStorageItem} from '../../../helpers/local-storage.helpers'
import {AppContext} from '../../../context-api/app-context'
import Loader from '../../../components/loader/loader'
import TextField from '../../../components/text-field/text-field'
import ButtonComponent from '../../../components/button/button'
import './login-form.css'

const LoginForm = (props) => {
  const appContext = useContext(AppContext)

  let errorEmail = ''
  let errorPassword = ''

  let helperEmail = ''
  let helperPassword = ''

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
