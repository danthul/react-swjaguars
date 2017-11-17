import * as React from "react";
import { Timeline } from "react-twitter-widgets";
// var Timeline = require('react-twitter-widgets').Timeline

class TwitterFeed extends React.Component {
  render() {
    return (
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "SWJaguarsLax"
        }}
        options={{
          username: "SWJaguarsLax",
          height: "800"
        }}
      />
    );
  }
}

export default TwitterFeed;
