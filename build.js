import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Home from './lib/Home'
import TakeClass from './lib/TakeClass'

render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/TakeClass/:username" component={TakeClass}/>

  </Router>
), document.getElementById('app'));
