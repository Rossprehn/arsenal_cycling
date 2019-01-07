import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const Header = () => (
  <header>
    <div>
      <nav>
        <NavLink to="/" >
          <img src="./assets/AC.png" alt="AC logo" id="home-img" />
        </NavLink>
      </nav>
    </div>
    <nav>
      <ul className="nav-bar">
        <li>
          <NavLink to="/about" activeClassName="selected" className="head-nav">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" activeClassName="selected" className="head-nav">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/instagram" activeClassName="selected" className="head-nav">
            Instagram
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" activeClassName="selected" className="head-nav">
            Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/store" activeClassName="selected" className="head-nav">
            Store
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="selected" className="head-nav">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
