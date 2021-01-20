import React from 'react'
import Header from '../../../components/header/header'
import Footer from '../../../components/footer/footer'
import './dashboard.css'

const Dashboard = () => {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className='container dashboard-page'>
        <label>Dashboard</label>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Dashboard
