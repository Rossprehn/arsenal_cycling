import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const Header = () => (
  <header>
    <img />
    <nav>
      <ul>
        <li>
          <NavLink to="/about" activeClassName="selected">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" activeClassName="selected">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/instagram" activeClassName="selected">
            Instagram
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" activeClassName="selected">
            Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/store" activeClassName="selected">
            Store
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="selected">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
