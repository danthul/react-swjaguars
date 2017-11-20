import * as React from "react";
import Panel from "./Panel";

type Props = {
  /* */
};

type messageItem = {
  body: string;
  name: string;
  updated: string;
};

type State = {
  messages?: { key: messageItem };
  currentUser: any;
};

class MessageList extends React.Component<Props, State> {
  messageRef: any;
  constructor(props: any) {
    super(props);
    this.state = {
      messages: undefined,
      currentUser: ""
    };
  }

  // componentDidMount() {

  // }

  render() {
    const { messages } = this.state;
    return (
      <div className="container">
        <div className="row">
          <main className="col-md-12">
            {messages
              ? Object.keys(messages).map((keyName, keyIndex) => {
                  return (
                    <div key={keyIndex}>
                      <Panel
                        hdate={messages[keyName].updated}
                        heading={messages[keyName].name}
                      >
                        {messages[keyName].body}
                      </Panel>
                    </div>
                  );
                })
              : ""}
          </main>
        </div>
      </div>
    );
  }
}

export default MessageList;
