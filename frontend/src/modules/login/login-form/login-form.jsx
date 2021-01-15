import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Card, CardBody} from 'reactstrap'
import Loader from '../../../components/loader/loader'
import TextField from '../../../components/text-field/text-field'
import ButtonComponent from '../../../components/button/button'
import './login-form.css'

const LoginForm = () => {
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
      <div className='loginWrapper'>
        <Card className='overflow-hidden'>
          <div className='loginHeader'>
            <div className='text-primary text-center p-4'>
              <h5 className='text-white font-size-20'>
                Welcome Back !
              </h5>
              <p className='text-white-50'>
                Sign into Online Book Store
              </p>
              <img src={'https://www.strunkmedia.com/wp-content/uploads/2018/05/bigstock-Print-163213010.png'}
                   height='50'
                   alt='logo'/>
            </div>
          </div>
          <CardBody className='p-4'>
            <div className='p-3'>
              <TextField isRequired={true}
                         labelText={'Email'}
                         name={'email'}
                         value={email}
                         errorText={''}
                         onChangeFn={(event) => onChangeEmail(event)}/>
              <TextField isRequired={true}
                         labelText={'Password'}
                         type={'password'}
                         name={'password'}
                         value={password}
                         errorText={''}
                         onChangeFn={(event) => onChangePassword(event)}/>
              <div className='d-flex justify-content-end'>
                <ButtonComponent btnText={'Login'}
                                 isFullWidth={false}
                                 elementStyle={'loginBtn'}
                                 onClickFn={onSubmit}/>
              </div>
            </div>
            <div className='text-center'>
              <Link to={'/register'}>
                Click here to register
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default LoginForm
