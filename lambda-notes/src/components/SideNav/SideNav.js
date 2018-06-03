import React, { Component } from 'react';
import  './index.css';

class SideNav extends Component {
    render() {
        return (
            <div className = 'nav-container'>
                <h1 className = "nav_header">Lambda Notes</h1>
            <div className="nav_container">
                <div className="nav_button">View Your Notes</div>
                <div className="nav_button">+ Create New Notes</div>
            </div>
            </div>
        );
    }
}

export default SideNav;