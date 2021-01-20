import React from 'react'
import Header from '../../../components/header/header'
import Footer from '../../../components/footer/footer'
import NotFoundPage from './not-found-page/not-found-page'
import './not-found.css'

const NotFound = () => {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className='container not-found-page'>
        <NotFoundPage/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default NotFound


