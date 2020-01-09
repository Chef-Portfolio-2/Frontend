import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavBarSignin from '../NavBars/NavBarSignin';

const Container = styled.div`
    display: flex; 
    justify-content: space-around;
    width: 75%;
    margin: 5vh auto;
    align-items: center;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    height: 325px;
    width: 30%;
    border: 1px solid lightgray;
    margin: 5px 5px;
`;

const CardTitle=styled.h2`
    color: #1a1a1a;
    font-size: 18px;
    text-align: left;
    border-bottom: 1px solid lightgray;
    padding: 5px;
`
const CardAuthor=styled.h3`
    color: #545454;
    font-size: 14px;
`
const CardType=styled.div`
    color: white;
    background-color: #32B672;
    border-radius: 20px;
    font-size: 12px;
    width: 33%;
    text-align: center;
`
const CardAuthorAndType=styled.div`
    display: flex;
    justify-content:space-between;
    align-items: baseline;
    padding: 5px;

`

const CardImage = styled.img`
    max-width: 250px;
    max-height:150px;
    min-height: 150px;
    overflow: hidden;
`

const CardDescription = styled.p`
    font-size: 12px;
    color: #1a1a1a;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 15%;

`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;


function RecipeList({recipes}) {
    console.log("yo");
console.log(recipes);

    return (
        <>
        <NavBarSignin />
      <Container>
        {recipes.map(recipe => {
            
            return <StyledLink to={`recipelist/${recipe.id}`}>
                        <Card key={recipe.id}>
                        <CardImage src={recipe.photo} />
                        <CardTitle>{recipe.title}</CardTitle>
                        <CardAuthorAndType>
                            <CardAuthor>{recipe.chef_name}</CardAuthor>
                            <CardType>{recipe.meal_type}</CardType>
                        </CardAuthorAndType>
                        <CardDescription></CardDescription>
                    </Card>
                </StyledLink>
        })}
      </Container>
      </>
    );
}

export default RecipeList;