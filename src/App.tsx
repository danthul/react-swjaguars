import * as React from "react";
import styled from "styled-components";

import "typeface-droid-sans";
import Routes from "./Routes";
import Header from "./Header";
import Navbar from "./Navbar";
import "./App.css";

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

const MastHead = styled.header`
  min-height: 250px;
  color: #222222;
  padding-top: 50px;
  .well {
    margin-top: 3%;
    background-color: #ffffff;
  }
`;

export default App;
