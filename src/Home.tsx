import * as React from "react";

// import { Link } from "react-router-dom";
import Panel from "./Panel";

const Home = () => (
  <div className="container">
    <div className="row">
      <main className="col-md-8">
        <Panel heading={`Who are the Southwest Jaguars?`}>
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
              Plainfield/Oswego Illinois area. The club was formed to develop
              the sport of lacrosse at the high school level and managed by an
              independent board of parents and coaches who volunteer their time.
              {/* <Link to={} /> */}
            </div>
          </div>
        </Panel>
        <Panel>
          <div>Athletico</div>
        </Panel>
      </main>
    </div>
  </div>
);

export default Home;
