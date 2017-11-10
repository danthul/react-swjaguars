import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DropDownMenuList = styled.ul`
  list-style: none;
  float: right;
  background-image: linear-gradient(to bottom, #3c3c3c 0%, #222 100%);
  position: absolute;
  right: 0;
  top: 52px;
  padding: 10px 22px;
  border-radius: 0 0 0 5px;
  transition: opacity 0.4s ease-in-out;
  display: block;
  opacity: ${(props: DropDownMenuProps) => (props.showDropDown ? 1 : 0)};
`;

const DropDownLink = styled(Link)`
  color: #9d9d9d;
  background-color: transparent;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  text-decoration: none;
  line-height: 1.7;
  &:hover {
    color: #fff;
    background-color: transparent;
    text-decoration: none;
  }
`;

export interface DropDownMenuProps {
  showDropDown: boolean;
}

const DropDownMenu = (props: DropDownMenuProps) => {
  return (
    <DropDownMenuList showDropDown={props.showDropDown}>
      <li>
        <DropDownLink to="/">Home</DropDownLink>
      </li>
      <li>
        <DropDownLink to="/calendar">Calendar</DropDownLink>
      </li>
      <li>
        <DropDownLink to="/articles">Messages</DropDownLink>
      </li>
      <li>
        <DropDownLink to="/slideshow">Pictures</DropDownLink>
      </li>
      <li>
        <DropDownLink to="/about">Our Mission</DropDownLink>
      </li>
    </DropDownMenuList>
  );
};

export default DropDownMenu;
