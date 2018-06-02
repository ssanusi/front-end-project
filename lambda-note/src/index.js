import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const dummyReducer = ( state = [], action ) => state;

const store = createStore(dummyReducer);

ReactDOM.render(
    (
        <Provider store = {store} >
            <Router>
                <App />
            </Router>
        </Provider>
    ),
    document.getElementById('root'));
registerServiceWorker();
