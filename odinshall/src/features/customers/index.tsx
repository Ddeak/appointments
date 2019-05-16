import React from "react";
import { Route, Switch } from "react-router-dom";

import CustomerForm from "./CustomerForm";
import Home from "./Home";

export default () => (
  <Switch>
    <Route exact path="/customers" component={Home} />
    <Route path="/customers/create" component={CustomerForm} />
    <Route path="/customers/profile/:id" component={CustomerForm} />
  </Switch>
);
