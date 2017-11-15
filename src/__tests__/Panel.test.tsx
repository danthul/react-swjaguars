import * as React from "react";
// import * as ReactDOM from "react-dom";

import { shallow, render, configure } from "enzyme";
import Panel, { PanelProps } from "../Panel";

// setup file
import * as Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Panel", () => {
  let props: PanelProps;
  const panel = shallow(
    <Panel>
      <div>This is the body</div>
    </Panel>
  );

  const panelWithHeading = shallow(
    <Panel heading={"This is the heading"}>
      <div>This is the body</div>
    </Panel>
  );

  // All tests will go here
  it("always renders a div", () => {
    const divs = panel.find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("renders a body", () => {
    const bodyDiv = panel.find(".panel-body");
    expect(bodyDiv.length).toEqual(1);
  });

  it("adds text to body", () => {
    const panelWithBody = panel.find(".panel-body");
    expect(panelWithBody.text()).toEqual("This is the body");
  });

  it("doesn't create a header if one isn't passed", () => {
    const bodyDiv = panel.find(".panel_header");
    expect(bodyDiv.length).toEqual(0);
  });

  it("does create a header if one is passed", () => {
    const bodyDiv = panelWithHeading.find(".panel_header");
    expect(bodyDiv.length).toEqual(1);
  });
});
