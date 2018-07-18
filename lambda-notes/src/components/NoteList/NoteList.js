import React, { Component } from 'react';
import  './index.css';

class NoteList extends Component {
    constructor() {
        super();
        this.state = {
            notesArray : [
                {
                    id : 1528050555834,
                    title : "First Title",
                    body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                },
                {
                    id : 1528050555844,
                    title : "Second Title",
                    body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                },
                {
                    id : 1528050555854,
                    title : "Third Title",
                    body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                },
                {
                    id : 1528050555864,
                    title : "Fouth Title",
                    body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                },
                {
                    id : 1528050555874,
                    title : "Fifth Title",
                    body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                },
                {
                    id : 1528050555884,
                    title : "Sixth Title",
                    body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                },
                
            ]
        };
    }

    const

    render() {
        const noteCollection = this.state.notesArray.map((note,index) => {
            return (
                <div className = "note" key ={index}>
                    <div>
                        <h4>{note.title}</h4>
                        <hr/>
                        <p>{note.body}</p>
                    </div>
                </div>
            )
        })
        return (
            <div className="noteList_container">
                <div className="note_Header"><h2>Your Notes:</h2></div>
                <div className="noteList">
                 {noteCollection}
                </div>
            </div>
        );
    }
}

export default NoteList;




