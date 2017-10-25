import * as React from "react";
import styled from "styled-components";
const Logo = require("./images/Southwest-Logo.png");

const MastheadTitle = styled.h1`
  font-size: 30px;
  line-height: 1;
  margin: 0;
  padding: 0;
  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`;

const HeaderLogo = styled.img`
  max-width: 210px;
`;

const HeaderWell = styled.div`
  background-color: #faf9f9;
  border-radius: 8px;
  margin: 15px 0;
  padding: 14px;
`;

const Header = () => (
  <HeaderWell>
    <div className="clearfix">
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <HeaderLogo
            src={Logo}
            className="img-responsive center-block"
            alt="SouthwestLogo"
          />
        </div>
        <div className="col-md-9 col-sm-12">
          <MastheadTitle>
            Southwest Jaguars Lacrosse
            <p className="lead">
              High school lacrosse in Plainfield/Oswego, IL area
            </p>
            <div className="lead">
              Contact us at:{" "}
              <a className="lead" href="mailto:southwestlax@hotmail.com">
                southwestlax@hotmail.com
              </a>
            </div>
          </MastheadTitle>
        </div>
      </div>
    </div>
  </HeaderWell>
);

export default Header;
