import * as React from "react";
import { format } from "date-fns";
import Panel from "../Panel";
import { getMessageApi, newMessageApi, updateMessageApi } from "../apiHelpers";

type Props = {
  _id: string;
  editComplete: Function;
  editMessage: message;
};

type message = {
  body: string;
  name: string;
  updated: string;
  _id: string;
};

type State = {
  messagebody: string;
  messagename: string;
  messageupdated: string;
  currentUser: any;
};

class ManageMessage extends React.Component<Props, State> {
  messageRef: any;
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    const messagedate = this.props.editMessage.updated
      ? format(this.props.editMessage.updated, "MM/DD/YYYY hh:mm A")
      : format(new Date(), "MM/DD/YYYY hh:mm A");
    this.state = {
      messagebody: this.props.editMessage.body,
      messagename: this.props.editMessage.name,
      messageupdated: messagedate,
      currentUser: ""
    };
  }

  handleSubmit(event: any) {
    event.preventDefault();
    const newMessage = {
      _id: this.props._id,
      body: this.state.messagebody,
      name: this.state.messagename,
      updated: this.state.messageupdated
    };
    updateMessageApi(newMessage);
    this.props.editComplete(newMessage);
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
    const headingMessage = "Messages";
    return (
      <Panel heading={headingMessage}>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="col-sm-2 control-label" htmlFor="messageupdated">
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
            <label className="col-sm-2 control-label" htmlFor="messagename">
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
            <label className="col-sm-2 control-label" htmlFor="messagebody">
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
    );
  }
}

export default ManageMessage;
