import * as React from "react";
import * as axios from "axios";
import * as MockAdapter from "axios-mock-adapter";
import { render, configure, shallow, mount } from "enzyme";
import LastMessage from "../LastMessage";
import toJson from "enzyme-to-json";

// setup file
import * as Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);
const panel = mount(<LastMessage />);
mock.onGet("/articles/last").reply(200, {
  _id: "5a22c1d5fa2bdd4d546428bc",
  body: "another new one",
  name: "New message #2",
  __v: 0,
  updated: "2017-12-02T15:07:00.000Z"
});

describe("Last Message", () => {
  panel.update();
  // All tests will go here
  it("always renders a div", () => {
    const divs = panel.find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("renders a body", () => {
    const bodyDiv = panel.find(".panel-body");
    expect(bodyDiv.length).toEqual(1);
  });

  it("should render correctly", async () => {
    await expect(toJson(panel)).toMatchSnapshot();
  });
});
