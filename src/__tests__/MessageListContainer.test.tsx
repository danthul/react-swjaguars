import * as React from "react";
// import * as ReactDOM from "react-dom";
import * as axios from "axios";
import * as MockAdapter from "axios-mock-adapter";
// import { spy } from "sinon";
import { configure, mount } from "enzyme";
import toJson from "enzyme-to-json";
import MessageListContainer from "../Messages/MessageListContainer";
// setup file
import * as Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

// This sets the mock adapter on the default instance
let mock = new MockAdapter(axios);
let instance;

beforeEach(function() {
  instance = axios;
  mock = new MockAdapter(instance);
});

const messages = [
  {
    _id: "5a22c1d5fa2bdd4d546428bc",
    body: "another new one",
    name: "New message #2",
    __v: 0,
    updated: "2017-12-02T15:07:00.000Z"
  },
  {
    _id: "5a1f58999675c43714acd671",
    body: "Yo yo\n",
    name: "New message",
    __v: 0,
    updated: "2017-11-30T01:02:00.000Z"
  }
];

mock.onGet("/articles").reply(200, messages);

mock.onGet("/articles/last").reply(200, messages[0]);

describe("MessageListContainer", () => {
  it("gets successful response from API", async () => {
    const item = mount(<MessageListContainer />);
    return instance.get("/articles").then(response => {
      expect(toJson(item.update())).toMatchSnapshot();
      const divCount = item.find("div").length;
      expect(item.find("div").length).toBeGreaterThan(0);
      const bodyDiv = item.find(".panel-body");
      expect(document.querySelectorAll(".panel-body").length).toEqual(3);
    });
  });
});
