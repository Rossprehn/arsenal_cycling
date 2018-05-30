import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import './style.css'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="hero-img">
          <img />
          <p>No Ordinary Light</p>
        </div>
        <div className="product-container">
          <h3>Our Product</h3>
          <h4>A powerful combination of cycling, technology, and safety</h4>
        </div>
      </div>
    )
  }
}

export default Home
