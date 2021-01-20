import React, {useContext, useEffect, useState} from 'react'
import {Redirect, Route} from 'react-router-dom'
import {AppContext} from '../context-api/app-context'
import {checkUserInLocalStorage} from '../helpers/local-storage.helpers'
import Loader from '../components/loader/loader'
import './route-filter.css'

const RouteFilter = (
  {
    component: Component,
    needAuthentication,
    ...rest
  }
) => {
  const appContext = useContext(AppContext)

  const [authenticated, setAuthenticated] = useState(null)

  useEffect(() => {
    const localeStorageData = checkUserInLocalStorage()
    if (localeStorageData.status === true) {
      appContext.login(localeStorageData.result)
      setAuthenticated(true)
    } else {
      setAuthenticated(false)
    }
  }, [Component])

  return (
    <div>
      <Route {...rest}
             render={(props) => {
               if (needAuthentication && authenticated === null) {
                 return (
                   <Loader/>
                 )
               } else if (needAuthentication && !authenticated) {
                 return (
                   <Redirect to={'/login'}/>
                 )
               } else if (!needAuthentication && authenticated) {
                 return (
                   <Redirect to={'/'}/>
                 )
               } else if (!needAuthentication || authenticated) {
                 return (
                   <Component {...props} />
                 )
               }
             }}/>
    </div>
  )
}

export default RouteFilter
