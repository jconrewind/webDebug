import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Displayer from "./views/Displayer";
import Home from "./views/Home";
import Test from "./views/Test";

import { routes } from "./constants";

function Router() {
  return (
    <Switch>
      <Redirect exact from="/" to={routes.HOME} />
      <Route path={routes.HOME} component={Home} />
      <Route path={routes.DISPLAYER} component={Displayer} />
      <Route path={routes.TEST} component={Test} />
    </Switch>
  );
}

export default Router;
