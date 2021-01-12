import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";

export default function Note(props) {
  console.log(props);

  return (
    <div className="notesitems">
      <Link to={"/notes/" + props.note.id} key={props.note.id}>
        {props.note.name}
      </Link>
      <br />
      <br />
      <p>{moment(props.note.modified).format("MMMM DD, YYYY")}</p>
      <button
        onClick={(e) => {
          props.handleDeleteNote(props.note.id);
          props.history.push("/");
        }}
      >
        Delete Note
      </button>
      <br />
    </div>
  );
}

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    content: PropTypes.string,
    modified: PropTypes.string,
  }),
  handleDeleteNote: PropTypes.any,
  history: PropTypes.any,
};
