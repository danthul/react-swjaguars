import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "typeface-droid-sans";
import Landing from "./Landing";
import "./App.css";

const FourOhFour = () => <h1>404</h1>;

type Props = {
  /* */
};

class App extends React.Component<Props> {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
