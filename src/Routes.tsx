import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import MessageListContainer from "./Messages/MessageListContainer";
import CalendarContainer from "./CalendarContainer";
import GalleryContainer from "./Gallery/GalleryContainer";

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/messages" component={MessageListContainer} />
      <Route path="/calendar" component={CalendarContainer} />
      <Route path="/gallery" component={GalleryContainer} />
    </Switch>
  );
};

export default Routes;
