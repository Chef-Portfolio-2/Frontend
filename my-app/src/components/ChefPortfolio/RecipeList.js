import React, { useState,useEffect } from 'react';
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
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


function RecipeList({recipes}) {


    return (
      <Container>
        {recipes.map(recipe => {
            
            return <Link to={`recipelist/${recipe.id}`}><RecipeCard recipe={recipe} key={recipe.id}/></Link>
        })}
      </Container>
    );
}

export default RecipeList;