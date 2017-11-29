import * as React from "react";
// import * as ReactDOM from "react-dom";

import { configure, shallow } from "enzyme";
import LastMessage from "../LastMessage";
import toJson from "enzyme-to-json";

// setup file
import * as Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Manage Message", () => {
  const panel = shallow(<LastMessage />);

  // All tests will go here
  it("always renders a div", () => {
    const divs = panel.find("div");
    expect(divs.length).toBeGreaterThan(0);
  });
});
