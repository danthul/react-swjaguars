import * as React from "react";
import Panel from "./Panel";
import { auth, database } from "./firebaseDB";

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
    this.messageRef = database.ref("messages");
    this.state = {
      messages: undefined,
      currentUser: ""
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser });
      if (this.messageRef) {
        this.messageRef.on("value", (snapshot: any) => {
          this.setState({
            messages: snapshot.val()
          });
        });
      }
    });
  }

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
