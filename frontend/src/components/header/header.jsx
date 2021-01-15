import React, {Fragment} from 'react'
import {withRouter} from 'react-router-dom'
import {Nav, Navbar, NavbarBrand} from 'reactstrap'
import {removeFromLocalStorage} from '../../helpers/local-storage.helpers'
import {authStoreKey} from '../../configs/config'
import './header.css'

const Header = (props) => {
  const onSignOut = () => {
    removeFromLocalStorage(authStoreKey)
    props.history.push('/')
  }

  return (
    <Fragment>
      <Navbar expand='md'
              className={'header'}>
        <NavbarBrand>
          <i className='icon fas fa-bars'/>
        </NavbarBrand>
        <Nav className='mr-auto'
             navbar/>
        <NavbarBrand>
          <i className='icon fas fa-sign-out-alt'
             onClick={onSignOut}/>
        </NavbarBrand>
      </Navbar>
    </Fragment>
  )
}

export default withRouter(Header)