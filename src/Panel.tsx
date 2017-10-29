import * as React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

export interface PanelProps {
  heading?: string;
  children: string | JSX.Element;
}

const header = (heading?: string) => {
  if (heading) {
    return <div className="panel-heading">{heading}</div>;
  } else {
    return;
  }
};

const Panel = (props: PanelProps) => (
  <div className="panel panel-default">
    {header(props.heading)}
    <div className="panel-body">{props.children}</div>
  </div>
);

export default Panel;
