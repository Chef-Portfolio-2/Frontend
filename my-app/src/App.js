import React, {useState} from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import RecipePage from "./components/ChefPortfolio/RecipePage"
import Home from "./components/Home"
// import LoginForm from "./components/Login"

import './App.css';
import ChefPortfolioPage from './components/ChefPortfolio/ChefPortfolioPage';
import RegisterChef from './components/ChefPortfolio/Register.js';
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
      <Route path="/recipepage/" component={RecipePage} />
      <Route exact path="/" component={Home} />
      {/* <Route path = "/login/" component = { LoginForm} /> */}
      {/* will change ChefPortolioPage to Private Route later */}
      <Route path="/chefportfolio/" component={ChefPortfolioPage} />
      <Route path='/Register' component={RegisterChef} />
      
    </div>
  );
}

export default App;
