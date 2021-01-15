import React, {Fragment} from 'react'
import {BrowserRouter, Switch} from 'react-router-dom'
import Login from './modules/login/login'
import Register from './modules/register/register'
import Home from './modules/home/home'
import RouteFilter from './route-filter/route-filter'
import './App.css'

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <RouteFilter path={'/'}
                       exact={true}
                       isProtected={true}
                       component={Home}/>
          <RouteFilter path={'/login'}
                       exact={true}
                       isProtected={false}
                       component={Login}/>
          <RouteFilter path={'/register'}
                       exact={true}
                       isProtected={false}
                       component={Register}/>
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
