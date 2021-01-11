import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

import NoteContext from "./context";

function Sidebar() {
  return (
    <NoteContext.Consumer>
      {(value) => {
        return (
          <div className="sidebar">
            <div className="folders">
              {value.folders.map((name, index) => (
                <Link to={"/folders/" + name.id} key={index}>
                  {name.name}
                </Link>
              ))}
            </div>

            <Link to="/newfolder">
              <button className="add-folder">Add Folder</button>
            </Link>
          </div>
        );
      }}
    </NoteContext.Consumer>
  );
}

export default Sidebar;
