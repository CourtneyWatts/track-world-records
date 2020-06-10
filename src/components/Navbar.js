import React, { Component } from 'react'
import '../components/navbar.scss'
import { WithRouter, NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {
      console.log('ii')
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <NavLink className='navbar-brand' exact to='/'>
          Track World Records
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <NavLink activeClassName='nav-link active' exact className='nav-link' to='/men'>
                Men
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink activeClassName='nav-link active' exact className='nav-link' to='/women'>
                Women
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
