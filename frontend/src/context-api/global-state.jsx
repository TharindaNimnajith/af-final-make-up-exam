import React, {useState} from 'react'
import {AppContext} from './app-context'

export const GlobalState = props => {
  const [loginData, setLoginData] = useState(null)

  const login = data => {
    setLoginData(data)
  }

  return (
    <AppContext.Provider value={{
      loginData: loginData,
      login: login
    }}>
      {props.children}
    </AppContext.Provider>
  )
}
