import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import About from './About'
import Services from './Services'
import contact from './contact'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/services" component={Services}>
      </Route>
	  <Route path="/contact" component={contact}>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
