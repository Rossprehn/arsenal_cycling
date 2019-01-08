import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import bikeSilhouette from '../Images/bike_silhouette.svg'
import './style.css'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="hero-img">
          <img alt="logo" />
          <p>No Ordinary Light</p>
        </div>
        <div className="product-container">
          <h3>Our Product</h3>
          <h4>A powerful combination of cycling, technology, and safety</h4>
          
          <div> 
            <NavLink to="/about">see more</NavLink> 
          </div>
          
          <img src={bikeSilhouette} alt="bike" />
        </div>
      </div>
    )
  }
}

export default Home
