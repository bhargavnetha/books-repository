import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FormValidation from './FormValidation/FormValidation';
import loginForm from './FormValidation/FormValidation'
import YoutubeForm from './FormikForm/YoutubeForm';
import NavigationBar from './components/NavigationBar'
import App from './App.js'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
   
  <App/>
  ,
  document.getElementById('root')
);

//<React.StrictMode>

  

//</React.StrictMode>,


reportWebVitals();
