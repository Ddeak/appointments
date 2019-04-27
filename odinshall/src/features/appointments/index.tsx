import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Create from './Create'
import Home from './Home'

export default () => (
  <>
    <Switch>
      <Route exact path='/appointments' component={Home} />
      <Route path='/appointments/create' component={Create} />
    </Switch>
  </>
)
