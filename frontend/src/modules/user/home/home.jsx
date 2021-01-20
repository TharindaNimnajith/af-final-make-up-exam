import React from 'react'
import Header from '../../../components/header/header'
import Footer from '../../../components/footer/footer'
import './home.css'

const Home = () => {
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
