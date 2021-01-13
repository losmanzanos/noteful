import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.css";

import NoteItem from "./Components/NoteItem";
import Sidebar from "./Components/Sidebar";
import NoteList from "./Components/NotesList";
import SidebarNote from "./Components/SidebarNote";
import NewFolder from "./Components/AddFolder";
import NewNote from "./Components/AddNote";
import NotefulError from "./Components/NotefulError";

import pencil from "../src/pencil.gif";

import NoteContext from "./Components/context";

import config from "./config";

class App extends React.Component {
  state = {
    folders: [],
    notes: [],
    error: null,
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    var folders, notes;

    fetch(config.API_ENDPOINT + "/api/folders")
      .then((response) => response.json())
      .then((data) => {
        folders = data;
        this.setState({ folders: folders });
        return fetch(config.API_ENDPOINT + "/api/notes");
      })

      .then((response) => response.json())
      .then((data) => {
        notes = data;
        this.setState({ notes: notes });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      });
  };

  handleDeleteNote = (noteId) => {
    fetch(config.API_ENDPOINT + `/api/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        this.setState({
          notes: this.state.notes.filter((note) => note.id !== noteId),
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      });
  };

  static contextType = NoteContext;

  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      handleDeleteNote: this.handleDeleteNote,
      getData: this.getData,
    };
    return (
      <NotefulError>
        <NoteContext.Provider value={value}>
          <BrowserRouter>
            <div>
              <header>
                <img src={pencil} alt="pencil" />
                <Link to="/" className="home">
                  <h1>Noteful</h1>
                </Link>
              </header>

              <hr />

              <main>
                {this.state.error}
                <nav>
                  <Switch>
                    <Route exact path="/" component={Sidebar} />
                    <Route path="/folders" component={Sidebar} />
                    <Route path="/notes/:id" component={SidebarNote} />
                    <Route path="/newfolder" component={Sidebar} />
                    <Route path="/newnote" component={Sidebar} />
                    <Route
                      path="/"
                      render={() => (
                        <div className="error-page">
                          404. Page not found...
                          <br />
                          <Link to="/">
                            <button>Back</button>
                          </Link>
                        </div>
                      )}
                    />
                  </Switch>
                </nav>

                <section>
                  <Route exact path="/" component={NoteList} />
                  <Route path="/folders/:id" component={NoteList} />
                  <Route path="/notes/:id" component={NoteItem} />
                  <Route path="/newfolder" component={NewFolder} />
                  <Route path="/newnote" component={NewNote} />
                </section>
              </main>
            </div>
          </BrowserRouter>
        </NoteContext.Provider>
      </NotefulError>
    );
  }
}

export default App;
