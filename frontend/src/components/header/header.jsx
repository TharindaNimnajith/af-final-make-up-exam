import React, {Fragment, useState} from 'react'
import {withRouter} from 'react-router-dom'
import {Nav, Navbar, NavbarBrand} from 'reactstrap'
import {removeFromLocalStorage} from '../../helpers/local-storage.helpers'
import {authStoreKey} from '../../configs/config'
import NavigationBar from '../navigation-bar/navigation-bar'
import './header.css'

const Header = (props) => {
  const [display, setDisplay] = useState(false)

  const onSignOut = () => {
    removeFromLocalStorage(authStoreKey)
    props.history.push('/')
  }

  const onNavBarDisplay = () => {
    setDisplay(!display)
  }

  return (
    <Fragment>
      <div className='flex'>
        <Navbar className='header'
                expand='md'>
          <NavbarBrand>
            <i className='icon fas fa-bars ms-4'
               onClick={onNavBarDisplay}/>
          </NavbarBrand>
          <Nav className='mr-auto'
               navbar/>
          <NavbarBrand>
            <i className='icon fas fa-sign-out-alt position-relative align-content-end'
               onClick={onSignOut}/>
          </NavbarBrand>
        </Navbar>
      </div>
      {
        display ? (
          <NavigationBar/>
        ) : null
      }
    </Fragment>
  )
}

export default withRouter(Header)
