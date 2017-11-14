import * as React from "react";
import styled from "styled-components";
import { format } from "date-fns";
// import { Link } from "react-router-dom";

export interface PanelProps {
  heading?: string;
  hdate?: string;
  children: string | JSX.Element;
}

const HeaderBar = styled.div`
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

const header = (heading?: string, hdate?: string) => {
  if (heading) {
    console.log("hdate", hdate);
    return (
      <HeaderBar>
        <div>{heading}</div>
        <div>{hdate ? format(new Date(hdate), "MMM D, YYYY h:mm a") : ""}</div>
      </HeaderBar>
    );
  } else {
    return;
  }
};

const Panel = (props: PanelProps) => (
  <div className="panel panel-default">
    {header(props.heading, props.hdate)}
    <div className="panel-body">{props.children}</div>
  </div>
);

export default Panel;
