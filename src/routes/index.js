import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Users from "../pages/users";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/browse" component={Dashboard} />
      <Route path="/users" component={Users} />
    </Switch>
  );
}

export default Routes;
