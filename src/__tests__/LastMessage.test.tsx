import * as React from "react";

import { render, configure, shallow } from "enzyme";
import LastMessage from "../LastMessage";
import toJson from "enzyme-to-json";

// setup file
import * as Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Last Message", () => {
  const panel = shallow(<LastMessage />, {
    disableLifecycleMethods: true
  });

  // All tests will go here
  it("always renders a div", () => {
    const divs = panel.find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("renders a body", () => {
    const bodyDiv = panel.find(".panel-body");
    expect(bodyDiv.length).toEqual(1);
  });

  it("should render correctly", () => {
    const output = shallow(<LastMessage />);
    expect(toJson(output)).toMatchSnapshot();
  });
});
