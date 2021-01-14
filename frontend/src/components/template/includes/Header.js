import React, {Component, Fragment} from 'react'
import {Nav, Navbar, NavbarBrand, NavbarText} from 'reactstrap'
import {withRouter} from 'react-router-dom'
import {removeFromLocalStorage} from '../../../helpers/local-storage.helpers'
import {authStoreKey} from '../../../configs/config'

class Header extends Component {
  logOutUserFn = () => {
    removeFromLocalStorage(authStoreKey)
    this.props.history.push('/')
  }

  render() {
    return (
      <Fragment>
        <Navbar expand='md' className={'nav-bar'}>
          <NavbarBrand>
            <img src={'https://www.strunkmedia.com/wp-content/uploads/2018/05/bigstock-Print-163213010.png'}
                 height='35'
                 alt='logo'/>
          </NavbarBrand>
          <Nav className='mr-auto' navbar/>
          <NavbarText className={'log-out-btn'}
                      onClick={this.logOutUserFn}>
            Log Out
          </NavbarText>
        </Navbar>
      </Fragment>
    )
  }
}

export default withRouter(Header)