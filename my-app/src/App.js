import React, {useState} from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import RecipePage from "./components/ChefPortfolio/RecipePage"
import LoginForm from "./components/Login"

import './App.css';


function App() {
  return (
    <div>
      <Router>
        <Route path="/recipepage/" component={RecipePage} />
        <Route path = "/login/" component = { LoginForm} />
      </Router>
    </div>
  );
}

export default App;
