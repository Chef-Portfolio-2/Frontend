import React, {useState} from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import RecipePage from "./components/ChefPortfolio/RecipePage"
import LoginForm from "./components/Login"

import './App.css';
import ChefPortfolioPage from './components/ChefPortfolio/ChefPortfolioPage';


function App() {
  return (
    <div>
      <Router>
        <Route path="/recipepage/" component={RecipePage} />
        <Route path = "/login/" component = {LoginForm} />
        {/* will change ChefPortolioPage to Private Route later */}
        <Route path= '/chefportfolio/' component = {ChefPortfolioPage} />
      </Router>
    </div>
  );
}

export default App;
