import * as React from "react";
import Panel from "./Panel";
import { auth, database } from "./firebase";
import SignIn from "./SignIn";

type Props = {
  /* */
};

type message = {
  body: string;
  name: string;
  updated: string;
};

type State = {
  messages?: [message];
  messagebody: string;
  messagename: string;
  messageupdated: string;
  currentUser: any;
};

class MessageList extends React.Component<Props, State> {
  messageRef: any;
  constructor(props: any) {
    super(props);
    this.messageRef = database.ref("messages");
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      messages: undefined,
      messagebody: "",
      messagename: "",
      messageupdated: "",
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

  handleSubmit(event: any) {
    event.preventDefault();
    const newMessage = {
      body: this.state.messagebody,
      name: this.state.messagename,
      updated: this.state.messageupdated
    };
    this.messageRef.push(newMessage);
  }

  handleChange(event: any) {
    const newData = event.target.value;
    const key = event.target.id;
    switch (key) {
      case "messagebody":
        this.setState({ messagebody: newData });
        break;
      case "messageupdated":
        this.setState({ messageupdated: newData });
        break;
      case "messagename":
        this.setState({ messagename: newData });
        break;
    }
  }
  render() {
    const {
      messagebody,
      messagename,
      messageupdated,
      currentUser
    } = this.state;
    return (
      <div className="container">
        <div className="row">
          <main className="col-md-12">
            {!currentUser && <SignIn />}
            {currentUser && (
              <Panel heading={`Messages`}>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label
                      className="col-sm-2 control-label"
                      htmlFor="messageupdated"
                    >
                      Updated
                    </label>
                    <div className="col-sm-10">
                      <input
                        id="messageupdated"
                        className="form-control"
                        type="text"
                        value={messageupdated}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      className="col-sm-2 control-label"
                      htmlFor="messagename"
                    >
                      Title
                    </label>
                    <div className="col-sm-10">
                      <input
                        id="messagename"
                        className="form-control"
                        type="text"
                        value={messagename}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      className="col-sm-2 control-label"
                      htmlFor="messagebody"
                    >
                      Body
                    </label>
                    <div className="col-sm-10">
                      <textarea
                        id="messagebody"
                        className="form-control"
                        value={messagebody}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                      <button className="btn btn-default" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </Panel>
            )}
          </main>
        </div>
      </div>
    );
  }
}

export default MessageList;
