import React, {Fragment} from 'react'
import {BrowserRouter, Switch} from 'react-router-dom'
import RouteFilter from './configurations/route-filter'
import Login from './modules/login/login'
import Register from './modules/register/register'
import Home from './modules/home/home'
import './App.css'

const App = () => {
  return (
    <div>
      <Fragment>
        <div>
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
        </div>
      </Fragment>
    </div>
  )
}

export default App
