import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import history from './utils/history';
import fontAwesomeLibraryLoader from './utils/faLibraryLoader';
import withTracker from './hooks/withTracker';
// import i18n (needs to be bundled ;))

fontAwesomeLibraryLoader();
ReactDOM.render(
    <Router history={history}>
        <Route exact component={withTracker(App, {})} />
    </Router>,
    document.getElementById('root'));
// If you want your app to work offline and load faster, you can change 
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
