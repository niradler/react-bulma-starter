import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from '../pages/About/About'
import Home from '../pages/Home/Home'

const Router = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/about' component={About}/>
  </Switch>
)
export default Router