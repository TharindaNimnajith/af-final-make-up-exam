import React from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap'
import './navigation-bar.css'

const NavigationBar = () => {
  return (
    <div className={'sidebar'}>
      <Nav vertical>
        <NavItem>
          <NavLink href='/'>
            <i className='fa fa-fw fa-home mr-2'/>
            <label>Navigation Link</label>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/'>
            <i className='fa fa-fw fa-home mr-2'/>
            <label>Navigation Link</label>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/'>
            <i className='fa fa-fw fa-home mr-2'/>
            <label>Navigation Link</label>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/'>
            <i className='fa fa-fw fa-home mr-2'/>
            <label>Navigation Link</label>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/'>
            <i className='fa fa-fw fa-home mr-2'/>
            <label>Navigation Link</label>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}

export default NavigationBar
