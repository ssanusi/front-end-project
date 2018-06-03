import React, { Component } from 'react';
import  './index.css';

class NoteView extends Component {
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
                {
                    id : 1528050555894,
                    title : "Seventh Title",
                    body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                },
                {
                    id : 1528050555900,
                    title : "Eigth Title",
                    body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                }

            ]
        };
    }


    render() {
        return (
            <div className="noteView_container">
            <div className ="noteView_topContent">
                <div className="note_Header">
                    <h3>
                        {this.state.notesArray[0].title}:
                    </h3>
                </div>
                <div>
                    <a className ="edit_delete">edit</a>
                    <a className ="edit_delete">delete</a>
                </div>
            </div>
                <div>
                    <p>
                        {this.state.notesArray[0].body}
                    </p>
                </div>
            </div>
        );
    }
}

export default NoteView;