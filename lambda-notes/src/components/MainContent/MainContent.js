import React, { Component } from 'react';
import  './index.css';
import NoteList from '../NoteList/NoteList';

class MainContent extends Component {
    render() {
        return (
            <div  className = "main-container">
               <NoteList />
            </div>
        );
    }
}

export default MainContent;