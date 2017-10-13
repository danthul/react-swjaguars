import * as React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import Header from "./Header";

const MastHead = styled.header`
  min-height: 250px;
  color: #222222;
  .well {
    margin-top: 3%;
    background-color: #ffffff;
  }
`;

const Landing = () => (
  <MastHead id="masthead">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Header />
        </div>
      </div>
    </div>
  </MastHead>
);

export default Landing;
