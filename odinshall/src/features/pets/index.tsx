import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Create from './Create'
import Home from './Home'

export default () => (
  <Switch>
    <Route exact path='/pets' component={Home} />
    <Route path='/pets/create' component={Create} />
  </Switch>
)
