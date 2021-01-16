import React, {useContext, useEffect} from 'react'
import {AppContext} from '../../context-api/app-context'
import './home.css'

const Home = () => {
  const appContext = useContext(AppContext)

  useEffect(() => {
    console.log(appContext.loginData)
  })

  return (
    <div>
      <label>Home</label>
    </div>
  )
}

export default Home
