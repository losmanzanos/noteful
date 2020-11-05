import React from "react";
import "./AddNote.css";
import NoteContext from "./context";
import PropTypes from "prop-types";

class NewNote extends React.Component {
  state = {
    error: null,
  };
  static contextType = NoteContext;
  constructor(props) {
    super(props);
    this.noteName = React.createRef();
    this.noteContent = React.createRef();
    this.folderId = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.noteName.current.value;
    const content = this.noteContent.current.value;
    const modified = new Date();
    const folderId = this.folderId.current.value;
    const note = { name, content, folderId, modified };

    fetch("http://localhost:9090/notes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(note),
    })
      .then((result) => result.json())
      .then((info) => {
        this.context.getData();
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      });
  }

  render() {
    return (
      <form className="newnote" onSubmit={(e) => this.handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="note">Note Name:</label>
          <input
            type="text"
            className="notename"
            name="note"
            id="note"
            ref={this.noteName}
            placeholder="Name"
            aria-label="Name of note"
            aria-required="true"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="notecontent">Content:</label>
          <textarea
            type="text"
            className="notecontent"
            name="notecontent"
            id="notecontent"
            ref={this.noteContent}
            placeholder="Blah blah blah..."
            aria-label="Note content"
            aria-required="true"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="notefolder">Folder:</label>
          <select id="notefolder" name="notefolder" ref={this.folderId}>
            {this.context.folders.map((folder) => (
              <option key={folder.id} value={folder.id}>
                {folder.name}
              </option>
            ))}
          </select>
        </div>

        {this.state.error}
        <button type="submit" className="notesubmit">
          Submit
        </button>
      </form>
    );
  }
}

NewNote.propTypes = {
  history: PropTypes.any,
};

export default NewNote;
