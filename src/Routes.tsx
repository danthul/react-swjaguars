import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  );
};

export default Routes;
