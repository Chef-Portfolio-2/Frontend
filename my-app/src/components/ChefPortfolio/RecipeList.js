import React, { useState,useEffect } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';
import RecipeCard from './RecipeCard';

const Container = styled.div`
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-around;
    width: 50%;
    margin: 5vh auto;
    align-items: center;
`;

const RecipeHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    

`

const RecipeInfo = styled.div`
    
`


const RecipeTitle = styled.h2`
    font-size: 2rem;
    margin: 10px 0 0px 0;
`

const RecipeAuthor = styled.h3`
    font-size: 1rem;
    color: gray;
    margin: 5px 0px 5px 0px;
`

const RecipeContent = styled.p`
    font-size: 1rem;
`

const RecipeTags = styled.div`
  width: 15%;
  height: 15%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height:100%;
`;

const RecipeTag = styled.div`
  background-color: #32b672;
  margin-bottom: 5px;
  border-radius: 15px;
  text-align: center;
  width: 100%;
`;


function RecipeList() {

    const [recipes, setRecipes] = useState([]);


    useEffect(() => {
        axios
        .get('http://localhost:3000/recipes')
        .then( res => {
            setRecipes(res.data);
            console.log(res);
        })
        .catch(errors => {
            console.log( 'The data was not returned', errors )
        })
    },[]);


    return (
      <Container>
        {recipes.map(recipe => {
            return <RecipeCard recipe={recipe} key={recipe.id}/>
        })}
      </Container>
    );
}

export default RecipeList;