// @flow

import React from "react";
import { Route, Switch } from "react-router-dom";

import Create from "./Create";
import Home from "./Home";
import Profile from "./Profile";

export default () => (
  <Switch>
    <Route exact path="/customers" component={Home} />
    <Route path="/customers/create" component={Create} />
    <Route path="/customers/profile/:id" component={Profile} />
  </Switch>
);
