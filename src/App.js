import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={() => <Main />} />
        </div>
      </Router>
    )
  }
}

export default App
