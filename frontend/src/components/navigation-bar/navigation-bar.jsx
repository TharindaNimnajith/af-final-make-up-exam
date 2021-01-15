import React from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap'
import './navigation-bar.css'

const NavigationBar = () => {
  return (
    <div className={'sidebar'}>
      <Nav vertical>
        <NavItem>
          <NavLink href='/'>
            Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/'>
            Link
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}

export default NavigationBar
