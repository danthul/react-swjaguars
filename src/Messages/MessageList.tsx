import * as React from "react";
import Panel from "../Panel";
import ManageMessage from "./ManageMessage";

type MessageListProps = {
  editing: string;
  editMessage: message;
  editComplete: Function;
  newFN: () => void;
  editFN: (string) => void;
  deleteFN: (string) => void;
  messages?: message[];
};

type message = {
  body: string;
  name: string;
  updated: string;
  _id: string;
};

const MessageList: React.SFC<MessageListProps> = ({
  editing,
  editMessage,
  editComplete,
  newFN,
  editFN,
  deleteFN,
  messages
}: MessageListProps) => (
  <div className="container">
    <div className="row">
      <main className="col-md-12">
        {editing ? (
          <ManageMessage
            _id={editing}
            editMessage={editMessage}
            editComplete={editComplete}
          />
        ) : (
          <div />
        )}
        {!editing ? (
          <Panel>
            <button className="btn btn-primary" onClick={newFN}>
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
                      editFN: editFN,
                      deleteFN: deleteFN
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

export default MessageList;
