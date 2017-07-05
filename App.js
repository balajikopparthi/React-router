import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router</h1>
        <ul role="nav">
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
		  <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})