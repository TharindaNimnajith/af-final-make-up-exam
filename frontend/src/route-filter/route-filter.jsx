import React, {useEffect, useState} from 'react'
import {Redirect, Route} from 'react-router-dom'
import {checkUserInLocalStorage, setLocalStorageItem} from '../helpers/local-storage.helpers'
import Loader from '../components/loader/loader'
import './route-filter.css'

const RouteFilter = ({component: Component, isProtected, ...rest}) => {
  const [isAuth, setAuth] = useState(null)

  useEffect(() => {
    const localeStorageData = checkUserInLocalStorage()

    if (localeStorageData.status === true) {
      setLocalStorageItem(localeStorageData.result)
      setAuth(true)
    } else {
      setAuth(false)
    }
  }, [Component])

  return (
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
  )
}

export default RouteFilter
