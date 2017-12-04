import * as React from "react";
// import * as ReactDOM from "react-dom";

import { configure, shallow } from "enzyme";
import DropDownMenu, { DropDownMenuProps } from "../DropDownMenu";
import toJson from "enzyme-to-json";

// setup file
import * as Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

const noShowProps: DropDownMenuProps = {
  showDropDown: false
};

const showProps: DropDownMenuProps = {
  showDropDown: true
};

describe("Drop Down Menu", () => {
  // All tests will go here

  it("should render without menu", () => {
    const output = shallow(<DropDownMenu {...noShowProps} />);
    expect(toJson(output)).toMatchSnapshot();
  });

  it("should render with menu", () => {
    const output = shallow(<DropDownMenu {...showProps} />);
    expect(toJson(output)).toMatchSnapshot();
  });
});
