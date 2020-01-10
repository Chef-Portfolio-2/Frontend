
import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
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
    <div>
      <Router>
        <Switch>
          <Route path="/recipepage/" component={RecipePage} />
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login/" component={LoginForm} />
          {/* <Route path = "/Register/" component={Register}/> */}
          {/* will change ChefPortolioPage to Private Route later */}
          <Route path="/chefportfolio/" component={ChefPortfolioPage} />
          <Route path="/Register" component={Register} />
          <Route path="/contact" component={ContactForm} />
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
    </div>
  );
}

export default App;
