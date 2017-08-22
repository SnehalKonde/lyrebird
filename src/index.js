import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('root'));
registerServiceWorker();
