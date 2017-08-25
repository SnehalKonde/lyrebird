import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/app';
import ServiceMockingView from './containers/serviceMockingView/serviceMockingView';
import WorkflowView from './containers/workflowView/workflowView';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route} from "react-router";
import Store from "./store";
import {Provider} from 'react-redux';
const hashHistory = require('react-router/lib/hashHistory');
const IndexRoute = require('react-router/lib/IndexRoute');

ReactDOM.render(
    <Provider store={Store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={ServiceMockingView}></IndexRoute>
                <Route path="/service" component={ServiceMockingView}></Route>
                <Route path="/workflow" component={WorkflowView}></Route>
            </Route>
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
