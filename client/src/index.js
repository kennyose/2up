import React from 'react';
import ReactDOM from 'react-dom';

import 'grommet/scss/vanilla/index.scss';
import './styles/index.css';

import App from './App';

import ErrorPage from './components/ErrorPage';

var Application;

// Check if browser supports LocalStorage, else render Error Message
if (typeof(Storage) !== "undefined") {
  Application = App;
} else {
  Application = ErrorPage; 
}


const element = document.getElementById('root');
ReactDOM.render(<Application />, element);
