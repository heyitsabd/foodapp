import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Page1 from './Page1';


ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={App}/>
    <Route path="/page1" component={Page1}/>
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
