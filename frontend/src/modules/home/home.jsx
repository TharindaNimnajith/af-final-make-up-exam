import React, {useContext, useEffect} from 'react'
import {AppContext} from '../../context-api/app-context'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './home.css'

const Home = () => {
  const appContext = useContext(AppContext)

  useEffect(() => {
    console.log(appContext.loginData)
  })

  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className='container home-page'>
        <label>Home</label>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
