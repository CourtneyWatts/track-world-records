import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
} from 'reactstrap'
import './navbar.scss'

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.normalToggle = this.normalToggle.bind(this)

    this.state = {
      isOpen: false,
    }
  }
  normalToggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  toggle() {
    if (window.screen.width >= 768) {
      return
    }
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
        <Navbar color='dark' dark expand='md'>
          <NavbarBrand>
            <NavLink tag={Link} exact to='/'>
              World Records
            </NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={this.normalToggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink onClick={this.toggle} tag={Link} exact to='/men'>
                  Men
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle} tag={Link} exact to='/women'>
                  Women
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default withRouter(Navigation)
