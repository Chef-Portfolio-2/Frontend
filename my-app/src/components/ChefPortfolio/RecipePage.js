import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    width: 70%;
    margin: 5vh auto;
    border: 1px solid red;
    align-items: center;
`;

const RecipeHeader = styled.div`
    display: flex;
    

`


function RecipePage() {
    return (
        <Container>
            <img className="recipe-page-image" src="https://i.cbc.ca/1.5191482.1564695162!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/chocolate-tahini-fudge-sundaes.jpg"/>
            <p>recipeeeees</p>
        </Container>
    );
}

export default RecipePage;