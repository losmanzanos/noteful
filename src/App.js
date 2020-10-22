import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';


import NoteItem from './Components/NoteItem'
import STORE from './STORE';
import Sidebar from './Components/Sidebar';
import NoteList from './Components/NotesList';
import SidebarNote from './Components/SidebarNote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = STORE;
  }

  render() {
    console.log(this.state);
    return (
      <BrowserRouter>
        <div>
          <header>
            <Link to='/' className='home'>
              <h1>Noteful</h1>
            </Link>
          </header>

          <hr />

          <main>

            <nav>
              <Route exact path='/' render={() => <Sidebar className='sidebar' folders={this.state.folders} notes={this.state.notes} />}
              />
              <Route path='/folders' render={() => <Sidebar className='sidebar' folders={this.state.folders} notes={this.state.notes} />}
              />
              <Route path='/notes' render={() => <SidebarNote className='sidebar' folders={this.state.folders} notes={this.state.notes} />}
              />
            </nav>

            <section>
              <Route exact path='/' render={() => <NoteList folders={this.state.folders} notes={this.state.notes} />} />
              <Route path='/folders/:id' render={(routerProps) => <NoteList match={routerProps.match} folders={this.state.folders} notes={this.state.notes} />} />
              <Route path='/notes/:id' render={(routerProps) => <NoteItem match={routerProps.match} folders={this.state.folders} notes={this.state.notes} />} />
            </section>

          </main>
          {/* <Route path='/' render={()=> <div>404. Page not found...</div>} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
