import React, { Component } from 'react';
import  './index.css';
import NoteList from '../NoteList/NoteList';
import NoteView from '../NoteView/NoteView';


class MainContent extends Component {
    render() {
        return (
            <div  className = "main-container">
               <NoteView />
            </div>
        );
    }
}

export default MainContent;