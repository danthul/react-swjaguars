import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import MessageList from "./MessageList";
import ManageMessage from "./ManageMessage";

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/messages" component={MessageList} />
      <Route path="/slideshow" component={ManageMessage} />
    </Switch>
  );
};

export default Routes;
