import * as React from "react";
// import * as ReactDOM from "react-dom";

import { mount, configure } from "enzyme";
import Panel, { PanelProps } from "../Panel";

// setup file
import * as Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Panel", () => {
  let props: PanelProps;
  let mountedPanel: any;
  const panel = () => {
    if (!mountedPanel) {
      mountedPanel = mount(<Panel {...props} />);
    }
    return mountedPanel;
  };

  // All tests will go here
  it("always renders a div", () => {
    const divs = panel().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });
});
