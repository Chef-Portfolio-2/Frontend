
import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import RecipeList from "./components/ChefPortfolio/RecipeList"
import Home from "./components/Home"
import LoginForm from "./components/Login";
import axios from 'axios';
import RecipePage from "./components/ChefPortfolio/RecipePage"
// import Register from "./components/Register";
import PrivateRoute from './components/axiosAuthenticate/PrivateRoute';
import './App.css';
import ChefPortfolioPage from './components/ChefPortfolio/ChefPortfolioPage';
import Register from './components/ChefPortfolio/Register.js';
import styled from "styled-components";
import ContactForm from "./components/contact";




function App() {

  const [recipes, setRecipes] = useState([]);


  useEffect(() => {
      axios
      .get('https://chef-portfolio-2.herokuapp.com/api/posts/')

      .then( res => {
          setRecipes(res.data);
          console.log(res);
      })
      .catch(errors => {
          console.log( 'The data was not returned', errors )
      })
  },[]);


  return (
    <Router>
      
        <Switch>
          <PrivateRoute path="/chefportfolio" component={ChefPortfolioPage} />
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/contact" component={ContactForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/recipepage" component={RecipePage} />
          <Route path="/Register" component={Register} />
          <Route
            exact
            path="/recipelist"
            render={routeProps => {
              return <RecipeList {...routeProps} recipes={recipes} />;
            }}
          />
          <Route
            path="/recipelist/:id"
            render={routeProps => {
              return <RecipePage {...routeProps} recipes={recipes} />;
            }}
          />
        </Switch>
     
    </Router>
  );
}

export default App;
