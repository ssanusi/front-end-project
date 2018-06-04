import React, { Component } from 'react';
import  './index.css';

class CreateNote extends Component {
    render() {
        return (
            <div className="CreateNote_container">
                    <div className="note_Header">
                        <h3>
                            Create New Note:
                        </h3>
                </div>
                <div className="form_container">
                    <input type="text" placeholder ="Note Title"/>
                    <textarea rows="30" placeholder ="Note Content"></textarea>
                    <div className="submit">SAVE</div>
                </div>
            </div>
        );
    }
}

export default CreateNote;