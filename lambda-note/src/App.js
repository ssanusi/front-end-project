import React, { Component } from 'react';
import {
    CreateNote,
    DeleteNote,
    EditeNote,
    MainContent,
    NoteList,
    NoteView,
    SideNav
} from './components';


class App extends Component {
  render() {
    return (
      <div>
        APP HOMEPAGE
        <SideNav />
        <MainContent />
      </div>
    );
  }
}

export default App;
