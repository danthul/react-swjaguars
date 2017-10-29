import * as React from "react";
import styled from "styled-components";

import "typeface-droid-sans";
import Routes from "./Routes";
import Header from "./Header";
import Navbar from "./Navbar";
import "./App.css";

const MastHead = styled.header`
  min-height: 250px;
  color: #222222;
  margin-top: 50px;
  .well {
    margin-top: 3%;
    background-color: #ffffff;
  }
`;

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <MastHead id="masthead">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <Header />
              </div>
            </div>
          </div>
        </MastHead>
        <Routes />
      </div>
    );
  }
}

export default App;
