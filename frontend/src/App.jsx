import React, {Fragment} from 'react'
import {BrowserRouter, Switch} from 'react-router-dom'
import RouteFilter from './routes/route-filter'
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
              <RouteFilter path={'/login'}
                           exact={true}
                           needAuthentication={false}
                           userType={'User'}
                           component={Login}/>
              <RouteFilter path={'/register'}
                           exact={true}
                           needAuthentication={false}
                           component={Register}/>
              <RouteFilter path={'/'}
                           exact={true}
                           needAuthentication={true}
                           component={Home}/>
              <RouteFilter path={'/admin'}
                           exact={true}
                           needAuthentication={true}
                           component={Admin}/>
            </Switch>
          </BrowserRouter>
        </div>
      </Fragment>
    </div>
  )
}

export default App
