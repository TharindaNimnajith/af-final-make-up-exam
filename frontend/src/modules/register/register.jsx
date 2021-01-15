import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import RegisterForm from '../register/register-form/register-form'
import './register.css'

const Register = () => {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <RegisterForm/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Register
