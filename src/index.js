import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/app';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route} from "react-router";
const hashHistory = require('react-router/lib/hashHistory');
const IndexRoute = require('react-router/lib/IndexRoute');

ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={App}></Route>
            <IndexRoute component={App}></IndexRoute>
        </Router>, document.getElementById('root'));
registerServiceWorker();
