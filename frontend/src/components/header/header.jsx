import React, {Fragment, useState} from 'react'
import {withRouter} from 'react-router-dom'
import {Navbar, NavbarBrand} from 'reactstrap'
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
    <div>
      <Fragment>
        <div>
          <Navbar className='header d-flex justify-content-between w-100'
                  expand='md'>
            <div>
              <NavbarBrand>
                <i className='icon fas fa-bars ms-4'
                   onClick={onNavBarDisplay}/>
              </NavbarBrand>
            </div>
            <div>
              <NavbarBrand>
                <i className='icon fas fa-sign-out-alt'
                   onClick={onSignOut}/>
              </NavbarBrand>
            </div>
          </Navbar>
        </div>
        {
          display ? (
            <div>
              <NavigationBar/>
            </div>
          ) : null
        }
      </Fragment>
    </div>
  )
}

export default withRouter(Header)
