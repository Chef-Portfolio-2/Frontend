import React, {useState} from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import RecipeList from "./components/ChefPortfolio/RecipeList"
import Home from "./components/Home"
import LoginForm from "./components/Login";
// import Register from "./components/Register";

import './App.css';
import ChefPortfolioPage from './components/ChefPortfolio/ChefPortfolioPage';
import Register from './components/ChefPortfolio/Register.js';
import styled from "styled-components";

const NavBar=styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  margin: auto;

`




function App() {
  return (
    <div>
      <NavBar>
        <Link to="/" className="nav-links">
          Home
        </Link>
        <Link to="/recipelist/" className="nav-links">
          Recipes
        </Link>
        <Link to="/" className="nav-links">
          <span className="home-link">Chow</span>
        </Link>
        <Link to="/chefportfolio" className="nav-links">
          Portfolio
        </Link>
        <Link to="/login" className="nav-links">
          Login
        </Link>
      </NavBar>
      <Route path="/recipelist/" component={RecipeList} />
      <Route exact path="/" component={Home} />
      <Route path = "/login/" component={LoginForm} />
      {/* <Route path = "/Register/" component={Register}/> */}
      {/* will change ChefPortolioPage to Private Route later */}
      <Route path="/chefportfolio/" component={ChefPortfolioPage} />
      <Route path='/Register' component={Register} />
      
    </div>
  );
}

export default App;
