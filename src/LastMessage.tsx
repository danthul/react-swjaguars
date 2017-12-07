import * as React from "react";
import Panel from "./Panel";
import { getLastMessageApi } from "./apiHelpers";

type Props = {
  /* */
};

type State = {
  message: {
    body: string;
    name: string;
    updated: string;
  };
  currentUser: any;
  error: boolean;
  errorText: string;
};

class LastMessage extends React.Component<Props, State> {
  messageRef: any;
  constructor(props: any) {
    super(props);
    this.state = {
      message: {
        body: "",
        name: "",
        updated: ""
      },
      currentUser: "",
      error: false,
      errorText: ""
    };
  }

  async componentDidMount() {
    try {
      const response = await getLastMessageApi();
      if (response && response.data) {
        this.setState({ message: response.data[0] });
      }
    } catch (e) {
      console.error(e); // 💩
    }
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        {message ? (
          <Panel hdate={message.updated} heading={message.name}>
            {message.body}
          </Panel>
        ) : (
          <Panel heading={"No messages"}>No messages found</Panel>
        )}
      </div>
    );
  }
}

export default LastMessage;
