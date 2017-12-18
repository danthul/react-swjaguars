import * as React from "react";
import styled from "styled-components";
import * as moment from "moment";
// import { Link } from "react-router-dom";

export interface PanelProps {
  heading?: string;
  hdate?: string;
  children: string | JSX.Element;
  admin?: boolean;
  manageFunctions?: manageMessageFunctions;
}

interface manageMessageFunctions {
  editFN: (string) => void;
  deleteFN: (string) => void;
  _id: string;
}

const HeaderBar = styled.div`
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

// const ManageMessageButtons = (manageFunctions: manageMessageFunctions) => {
//   return (
//     <div>
//       <button
//         className="btn btn-warning ng-scope"
//         onClick={manageFunctions.editFN(22)}
//       >
//         <i className="fa fa-pencil fa-lg" /> Edit
//       </button>
//       <button
//         className="btn btn-danger ng-scope"
//         onClick={manageFunctions.deleteFN(44)}
//       >
//         <i className="fa fa-trash-o fa-lg" />
//         Delete
//       </button>
//     </div>
//   );
// };

const PanelHeader = (
  heading?: string,
  hdate?: string,
  admin?: boolean,
  manageFunctions?: manageMessageFunctions
) => {
  if (heading) {
    return (
      <HeaderBar className="panel_header">
        <div>{heading}</div>
        <div>
          {hdate ? moment(new Date(hdate)).format("MMM D, YYYY h:mm a") : ""}
        </div>
      </HeaderBar>
    );
  } else {
    return;
  }
};

const Panel = (props: PanelProps) => {
  const messageID = props.manageFunctions ? props.manageFunctions._id : "";
  const editFunction = () => {
    props.manageFunctions ? props.manageFunctions.editFN(messageID) : null;
  };

  const deleteFunction = () => {
    props.manageFunctions ? props.manageFunctions.deleteFN(messageID) : null;
  };

  return (
    <div className="panel panel-default">
      {PanelHeader(
        props.heading,
        props.hdate,
        props.admin,
        props.manageFunctions
      )}
      {typeof props.children === "string" ? (
        <div
          className="panel-body"
          dangerouslySetInnerHTML={{ __html: props.children }}
        />
      ) : (
        <div className="panel-body">{props.children}</div>
      )}
      {props.admin && editFunction && deleteFunction ? (
        <div>
          {editFunction ? (
            <button className="btn btn-warning" onClick={editFunction}>
              <i className="fa fa-pencil fa-lg" /> Edit
            </button>
          ) : (
            ""
          )}
          <button className="btn btn-danger" onClick={deleteFunction}>
            <i className="fa fa-trash-o fa-lg" />
            Delete
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Panel;
