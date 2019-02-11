// @flow

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainNav from "./navigation";

import AppointmentsRoutes from "./features/appointments";
import CustomerRoutes from "./features/customers";
import PetRoutes from "./features/pets";
import { SharedSnackbarProvider } from "./common/Snackbar";

const Index = () => <h2>Home</h2>;

const routes = () => (
  <React.Fragment>
    <Route path="/" exact component={Index} />
    <AppointmentsRoutes />
    <CustomerRoutes />
    <PetRoutes />
  </React.Fragment>
);

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <SharedSnackbarProvider>
          <MainNav content={routes()} />
        </SharedSnackbarProvider>
      </nav>
    </div>
  </Router>
);

export default AppRouter;
