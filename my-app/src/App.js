import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import RecipePage from "./components/ChefPortfolio/RecipePage"
import Home from "./components/Home"
import LoginForm from "./components/Login";
import PrivateRoute from './components/axiosAuthenticate/PrivateRoute';
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
      <Router>
        <Switch>
        <Route path="/recipepage/" component={RecipePage} />
        <PrivateRoute exact path="/" component={Home} />
        <Route path = "/login/" component={LoginForm} />
        {/* <Route path = "/Register/" component={Register}/> */}
        {/* will change ChefPortolioPage to Private Route later */}
        <Route path="/chefportfolio/" component={ChefPortfolioPage} />
        <Route path='/Register' component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
