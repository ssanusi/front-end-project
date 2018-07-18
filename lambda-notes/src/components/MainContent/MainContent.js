import React, { Component } from 'react';
import  './index.css';
import {Route} from 'react-router-dom'
import NoteList from '../NoteList/NoteList';
import NoteView from '../NoteView/NoteView';
import CreateNote from '../CreateNote/CreateNote';
import EditeNote from '../EditeNote/EditeNote';




class MainContent extends Component {
    render() {
        return (
            <div  className = "main-container">
            <Route exact path='/' component={NoteList}/>
            </div>
        );
    }
}

export default MainContent;