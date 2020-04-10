import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './containers/MainContainer.jsx';
import './assets/styles/styles.css';

global.BASE_URL = 'https://www.reddit.com/r';
global.DEFAULT_LIMIT = 25;

ReactDOM.render(<MainContainer/>, document.getElementById('root'));