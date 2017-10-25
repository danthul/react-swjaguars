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
    <div className="container">
      <div className="row">
        <main className="col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Who are the Southwest Jaguars?</div>
            <div className="panel-body">
              <div className="row">
                <div className="col-sm-6 col-lg-5">
                  <img
                    className="img-responsive center-block"
                    src="http://res.cloudinary.com/dcvhcqzp7/image/upload/c_scale,w_412/v1508812240/Team_Photo_3_qwp7u0.jpg"
                    height="200"
                    width="300"
                  />
                </div>
                <div className="col-sm-6 col-lg-7">
                  Southwest Lacrosse is a men's high school lacrosse team in the
                  Plainfield/Oswego Illinois area. The club was formed to
                  develop the sport of lacrosse at the high school level and
                  managed by an independent board of parents and coaches who
                  volunteer their time.
                  <a href="about.html">Learn more about us</a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </MastHead>
);

export default Landing;
