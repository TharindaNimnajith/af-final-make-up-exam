import React, {useContext, useEffect, useState} from 'react'
import {Redirect, Route} from 'react-router-dom'
import {AppContext} from '../context-api/app-context'
import {checkUserInLocalStorage} from '../helpers/local-storage.helpers'
import Loader from '../components/loader/loader'

const RouteFilter = ({component: Component, isProtected, ...rest}) => {
  const appContext = useContext(AppContext)

  const [isAuth, setAuth] = useState(null)

  useEffect(() => {
    const localeStorageData = checkUserInLocalStorage()
    if (localeStorageData.status === true) {
      appContext.login(localeStorageData.result)
      setAuth(true)
    } else {
      setAuth(false)
    }
  }, [Component])

  return (
    <div>
      <Route {...rest}
             render={(props) => {
               if (isProtected === true && isAuth === null) {
                 return (
                   <Loader/>
                 )
               } else if (isProtected === true && isAuth === false) {
                 return (
                   <Redirect to={'/login'}/>
                 )
               } else if (isProtected === false && isAuth === true) {
                 return (
                   <Redirect to={'/'}/>
                 )
               } else if (isProtected === false || isAuth === true) {
                 return (
                   <Component {...props} />
                 )
               }
             }}/>
    </div>
  )
}

export default RouteFilter
