import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/index'
import About from '../About/index'
import Products from '../Products/index'
import Instagram from '../Instagram/index'
import Events from '../Events/index'
import Store from '../Store/index'
import Contact from '../Contact/index'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
      <Route path="/instagram" component={Instagram} />
      <Route path="/events" component={Events} />
      <Route path="/store" component={Store} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </main>
)

export default Main
