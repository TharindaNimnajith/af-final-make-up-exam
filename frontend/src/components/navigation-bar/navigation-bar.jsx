import React from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap'
import './navigation-bar.css'

const NavigationBar = () => {
  return (
    <div className='sidebar'>
      <Nav vertical>
        <div>
          <NavItem>
            <NavLink href='/'>
              <i className='fa fa-fw fa-home m-1'/>
              <label>Navigation Link</label>
            </NavLink>
          </NavItem>
        </div>
        <div>
          <NavItem>
            <NavLink href='/'>
              <i className='fa fa-fw fa-home m-1'/>
              <label>Navigation Link</label>
            </NavLink>
          </NavItem>
        </div>
        <div>
          <NavItem>
            <NavLink href='/'>
              <i className='fa fa-fw fa-home m-1'/>
              <label>Navigation Link</label>
            </NavLink>
          </NavItem>
        </div>
        <div>
          <NavItem>
            <NavLink href='/'>
              <i className='fa fa-fw fa-home m-1'/>
              <label>Navigation Link</label>
            </NavLink>
          </NavItem>
        </div>
        <div>
          <NavItem>
            <NavLink href='/'>
              <i className='fa fa-fw fa-home m-1'/>
              <label>Navigation Link</label>
            </NavLink>
          </NavItem>
        </div>
      </Nav>
    </div>
  )
}

export default NavigationBar
