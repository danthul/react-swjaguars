import * as React from "react";
// import * as ReactDOM from "react-dom";
import * as moxios from "moxios";
import { spy } from "sinon";
import { configure, mount } from "enzyme";
import MessageListContainer from "../Messages/MessageListContainer";
// setup file
import * as Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

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

describe("MessageListContainer", () => {
  describe("#displayAllMessages", () => {
    beforeEach(() => {
      moxios.install();
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it("gets successful response from API", done => {
      moxios.stubRequest("/messages", {
        status: 200,
        response: messages
      });

      const item = mount(<MessageListContainer />);

      moxios.wait(function() {
        console.log("hmmm");
        expect(item.find("div").length).toBeGreaterThan(0);
        //const bodyDiv = item.find(".panel-body");
        //expect(bodyDiv.length).toEqual(1);
        // console.log("bodydiv", bodyDiv.html);
        done();
      });

      // const panel = mount(<MessageListContainer />);
    });
  });
});
