import * as React from "react";
import * as moment from "moment";
import Panel from "../Panel";
import { getMessagesApi, deleteMessageApi } from "../apiHelpers";
import MessageList from "./MessageList";

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

class MessageListContainer extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      editMessage: {
        _id: "0",
        body: "",
        name: "",
        updated: moment(new Date()).format("lll")
      },
      currentUser: "",
      editing: ""
    };
  }

  newFN = () => {
    this.setState({ editing: "0" });
  };

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
      deleteMessageApi(id)
        .then(() => {
          if (this.state.messages) {
            const otherMessages = this.state.messages.filter(message => {
              return message._id !== id;
            });
            if (otherMessages) {
              this.setState({ messages: otherMessages });
            }
          }
        })
        .catch(response => {
          console.error(response);
          alert("Something went wrong");
        });
    }
    return true;
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
    try {
      const response = await getMessagesApi();
      if (response && response.data) {
        this.setState({ messages: response.data });
      }
    } catch (e) {
      console.error(e); // 💩
    }
  }

  render() {
    return (
      <MessageList
        editing={this.state.editing}
        editMessage={this.state.editMessage}
        editComplete={this.editComplete}
        newFN={this.newFN}
        editFN={this.editFN}
        deleteFN={this.deleteFN}
        messages={this.state.messages}
      />
    );
  }
}

export default MessageListContainer;
