import React, {useState} from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import RecipePage from "./components/ChefPortfolio/RecipePage"
import Home from "./components/Home"
// import LoginForm from "./components/Login"

import './App.css';
import ChefPortfolioPage from './components/ChefPortfolio/ChefPortfolioPage';

import styled from "styled-components";

const NavBar=styled.nav`
  display: flex;
  justify-content: space-around;
  width: 70%;
  border: 1px solid red;
  margin: auto;

`




function App() {
  return (
    <div>
      <NavBar>
        <Link to="/" className="nav-links">
          Chow
        </Link>
        <Link to="/recipepage/" className="nav-links">
          Recipes
        </Link>
      </NavBar>
      <Route path="/recipepage/" component={RecipePage} />
      <Route exact path="/" component={Home} />
      {/* <Route path = "/login/" component = { LoginForm} /> */}
      {/* will change ChefPortolioPage to Private Route later */}
      <Route path="/chefportfolio/" component={ChefPortfolioPage} />
    </div>
  );
}

export default App;
