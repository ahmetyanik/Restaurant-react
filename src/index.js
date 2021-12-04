import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Category from './components/Category';
import Home from './components/Home';
import './index.css';

ReactDOM.render(
  <Router>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/category/:category">
      <Category />
    </Route> 

  </Router>,
  document.getElementById('root')
);
