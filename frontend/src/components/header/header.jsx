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
      <Navbar expand='md'
              className={'header'}>
        <NavbarBrand>
          <i className='icon fas fa-bars'
             onClick={onNavBarDisplay}/>
        </NavbarBrand>
        <Nav className='mr-auto'
             navbar/>
        <NavbarBrand>
          <i className='icon fas fa-sign-out-alt'
             onClick={onSignOut}/>
        </NavbarBrand>
      </Navbar>
      {
        display ? (
          <NavigationBar/>
        ) : null
      }
    </Fragment>
  )
}

export default withRouter(Header)
