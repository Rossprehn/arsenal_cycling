import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={() => <Redirect to="/main" />} />
        </div>
      </Router>
    )
  }
}

export default App
