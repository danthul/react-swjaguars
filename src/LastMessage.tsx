import * as React from "react";
import Panel from "./Panel";
import { auth, database } from "./firebase";

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
};

class LastMessage extends React.Component<Props, State> {
  messageRef: any;
  constructor(props: any) {
    super(props);
    this.messageRef = database
      .ref("messages")
      .orderByChild("updated")
      .limitToLast(1);
    this.state = {
      message: {
        body: "",
        name: "",
        updated: ""
      },
      currentUser: ""
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser });
      if (this.messageRef) {
        this.messageRef.on("value", (snapshot: any) => {
          const messageKey = Object.keys(snapshot.val())[0];
          this.setState({
            message: snapshot.val()[messageKey]
          });
        });
      }
    });
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        Why
        {message ? (
          <Panel heading={message.name}>{message.body}</Panel>
        ) : (
          <Panel heading={"No messages"}>No messages found</Panel>
        )}
      </div>
    );
  }
}

export default LastMessage;
