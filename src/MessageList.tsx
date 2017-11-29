import * as React from "react";
import { format } from "date-fns";
import Panel from "./Panel";
import { getMessagesApi, deleteMessageApi } from "./apiHelpers";
import ManageMessage from "./ManageMessage";

type Props = {
  /* */
};

type messageItem = {
  body: string;
  name: string;
  updated: string;
  _id: string;
};

type State = {
  messages?: messageItem[];
  editMessage: messageItem;
  currentUser: any;
  editing: string;
};

class MessageList extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      editMessage: {
        _id: "0",
        body: "",
        name: "",
        updated: format(new Date())
      },
      currentUser: "",
      editing: ""
    };
  }

  editFN = (id: string) => {
    this.setState({ editing: id });
    //go find this message and set editMessage
    if (this.state.messages) {
      const editMessage = this.state.messages.find(message => {
        return message._id === id;
      });
      if (editMessage) {
        this.setState({ editMessage });
      }
    }
    return true;
  };

  deleteFN = (id: string) => {
    if (confirm("Are you sure you wish to delete this message?")) {
      deleteMessageApi(id);
    }
    console.log(`deleting ${id}`);
    return true;
  };

  newFN = () => {
    this.setState({ editing: "0" });
  };

  editComplete = (editedMessage: messageItem) => {
    //find message and replace with this
    if (this.state.messages && editedMessage) {
      const messageID = this.state.messages.findIndex(message => {
        return message._id === editedMessage._id;
      });
      if (messageID > -1) {
        // this.setState;
        const cloneMessages = [...this.state.messages];
        cloneMessages[messageID] = editedMessage;
        this.setState({
          messages: cloneMessages
        });
      } else {
        this.setState({
          messages: [editedMessage, ...this.state.messages]
        });
      }
    }
    this.setState({ editing: "" });
  };

  async componentDidMount() {
    // try {
    const response = await getMessagesApi();

    if (response && response.data) {
      this.setState({ messages: response.data });
    }
  }

  render() {
    const { messages } = this.state;
    return (
      <div className="container">
        <div className="row">
          <main className="col-md-12">
            {this.state.editing ? (
              <ManageMessage
                _id={this.state.editing}
                editMessage={this.state.editMessage}
                editComplete={this.editComplete}
              />
            ) : (
              <div />
            )}
            {!this.state.editing ? (
              <Panel>
                <button className="btn btn-primary" onClick={this.newFN}>
                  Click here to create a new message
                </button>
              </Panel>
            ) : (
              <div />
            )}

            {messages
              ? messages.map(message => {
                  return (
                    <div key={message._id}>
                      <Panel
                        hdate={message.updated}
                        heading={message.name}
                        admin={true}
                        manageFunctions={{
                          _id: message._id,
                          editFN: this.editFN,
                          deleteFN: this.deleteFN
                        }}
                      >
                        {message.body}
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
