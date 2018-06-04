import React, { Component } from 'react';
import  './index.css';
import NoteList from '../NoteList/NoteList';
import NoteView from '../NoteView/NoteView';
import CreateNote from '../CreateNote/CreateNote';
import EditeNote from '../EditeNote/EditeNote';




class MainContent extends Component {
    render() {
        return (
            <div  className = "main-container">
               <EditeNote />
            </div>
        );
    }
}

export default MainContent;