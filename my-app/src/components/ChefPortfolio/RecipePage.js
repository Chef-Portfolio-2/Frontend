import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import NavBarSignin from '../NavBars/NavBarSignin';


const Container = styled.div`
    display: flex; 
    flex-direction: column;
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


function RecipePage({recipes, match}) {
const paramRecipeId = match.params.id;
console.log(recipes);
console.log(match);
console.log(paramRecipeId);
const recipeResults = recipes.filter(recipe => recipe.id === Number(paramRecipeId));
const recipe = recipeResults[0];
console.log(recipe);

  return (
      <>
        <NavBarSignin />
        <Container>
          <img
            className="recipe-page-image"
            src="https://i.cbc.ca/1.5191482.1564695162!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/chocolate-tahini-fudge-sundaes.jpg"
          />
          <RecipeHeader>
            <RecipeInfo>
              <RecipeTitle>{recipe.title}</RecipeTitle>
              <RecipeAuthor>{recipe.chef_name}</RecipeAuthor>
            </RecipeInfo>
            <RecipeTags>
              <RecipeTag>{recipe.meal_type}</RecipeTag>
            </RecipeTags>
          </RecipeHeader>
          <RecipeContent>
            {recipe.ingredients}
            {recipe.instructions}
          </RecipeContent>
        </Container>
      </>
    );
}

export default RecipePage;