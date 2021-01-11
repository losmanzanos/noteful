import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import NoteContext from "./context";

function SidebarNote(props) {
  return (
    <NoteContext.Consumer>
      {function renderProp(context) {
        const note =
          context.notes.find((note) => note.id == props.match.params.id) || {};
        const folder =
          context.folders.find((folder) => folder.id == note.folder_id) || {};
        return (
          <div className="sidebar">
            <div className="folders">
              <h2>{folder.name}</h2>
              <Link to="/">
                <button>Back</button>
              </Link>
            </div>
          </div>
        );
      }}
    </NoteContext.Consumer>
  );
}

SidebarNote.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default SidebarNote;
