import * as React from "react";
import { Link } from "react-router-dom";
import DropDownMenu from "./DropdownMenu";
import styled from "styled-components";

const DDButton = styled.button`
  position: relative;
  float: right;
  padding: 9px 10px;
  margin-top: 8px;
  margin-right: 15px;
  margin-bottom: 8px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const DDButtonLines = styled.span`
  background-color: #fff;
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
  margin-bottom: 3px;
`;

type Props = {
  /* */
};

type State = {
  /* */
  showingDropDown: boolean;
};

class Navbar extends React.Component<Props, State> {
  state = { showingDropDown: false };

  toggleDropDown = () => {
    this.setState({ showingDropDown: !this.state.showingDropDown });
  };
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="banner">
        <div className="container">
          <div className="navbar-header">
            <span className="hidden-sm">
              <a href="/" className="navbar-brand">
                Southwest Jaguars Lacrosse
              </a>
            </span>
            <DDButton onClick={this.toggleDropDown}>
              <span className="sr-only">Toggle navigation</span>
              <DDButtonLines />
              <DDButtonLines />
              <DDButtonLines />
            </DDButton>
            <DropDownMenu showDropDown={this.state.showingDropDown} />>
          </div>
          <nav
            className="navbar-collapse collapse am-collapse"
            role="navigation"
          >
            <ul className="nav navbar-nav pull-right">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/calendar"}>Calendar</Link>
              </li>
              <li>
                <Link to={"/messages"}>Messages</Link>
              </li>
              <li>
                <Link to={"/slideshow"}>Pictures</Link>
              </li>
              <li>
                <Link to={"/about"}>Our Mission</Link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    );
  }
}

export default Navbar;
