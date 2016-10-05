import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Home from './lib/Home'
import { Link } from 'react-router'
import TakeClass from './lib/TakeClass'

render((
  <Router history={ hashHistory }>
    <Route path="/" component={ Home }/>
    <Route path="/TakeClass" component={ TakeClass }/>
  </Router>
),document.getElementById('app'))
