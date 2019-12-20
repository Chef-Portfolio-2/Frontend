import React, {useState} from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import RecipePage from "./components/ChefPortfolio/RecipePage"
import LoginForm from "./components/Login"

import './App.css';
import ChefPortfolioPage from './components/ChefPortfolio/ChefPortfolioPage';

import styled from "styled-components";

const NavBar=styled.nav`
  display: flex;
  justify-items: space-around;

`


function App() {
  return (
    <div>
      <NavBar>
        Testing
      </NavBar>
        <Route path="/recipepage/" component={RecipePage} />
        <Route path = "/login/" component = { LoginForm} />
        {/* will change ChefPortolioPage to Private Route later */}
        <Route path= '/chefportfolio/' component = {ChefPortfolioPage} />
      
    </div>
  );
}

export default App;
