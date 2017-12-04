import * as React from "react";
// import * as ReactDOM from "react-dom";

import { format } from "date-fns";
import { configure, shallow } from "enzyme";
import ManageMessage from "../Messages/ManageMessage";
// setup file
import * as Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const editComplete = () => {
  return;
};

const editMessage = {
  _id: "0",
  body: "",
  name: "",
  updated: "2017-12-01 08:00:00"
};

describe("Manage Message", () => {
  const panel = shallow(
    <ManageMessage
      _id={"0"}
      editComplete={editComplete}
      editMessage={editMessage}
    />
  );

  // All tests will go here
  it("always renders a div", () => {
    const divs = panel.find("div");
    expect(divs.length).toBeGreaterThan(0);
  });
});
