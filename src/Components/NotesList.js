import React from "react";
import { Link } from "react-router-dom";
import "./NotesList.css";
import NoteContext from "./context";
import Note from "./Note";
import PropTypes from "prop-types";

function NotesList(props) {
  return (
    <NoteContext.Consumer>
      {function renderProp(value) {
        const notes = value.notes.filter(
          (note) =>
            note.folder_id == props.match.params.id || !props.match.params.id
        );
        return (
          <div>
            <div className="notes">
              {notes.map((note, index) => (
                <Note
                  key={note.id}
                  note={note}
                  handleDeleteNote={value.handleDeleteNote}
                  history={props.history}
                />
              ))}
            </div>
            <Link to="/newnote">
              <button className="addnote">Add Note</button>
            </Link>
          </div>
        );
      }}
    </NoteContext.Consumer>
  );
}

NotesList.defaultProps = {
  match: {
    params: {},
  },
};

NotesList.propTypes = {
  history: PropTypes.any,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default NotesList;
