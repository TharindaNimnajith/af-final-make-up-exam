import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import LoginForm from './login-form/login-form'
import './login.css'

const Login = () => {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <LoginForm/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Login
