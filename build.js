import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { Link } from 'react-router'
import Home from './lib/Home'
import Instructor from './lib/Instructor'
import TakeClass from './lib/TakeClass'

render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/Instructor/:username" component={Instructor}/>
    <Route path="/takeClass" component={TakeClass}/>
  </Router>
), document.getElementById('app'));
