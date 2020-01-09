import React, { useState,useEffect } from 'react';
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-around;
    width: 50%;
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


function RecipeList({recipes}) {
    console.log("yo");
console.log(recipes);

    return (
      <Container>
        {recipes.map(recipe => {
            
            return <Link to={`recipelist/${recipe.id}`}>
                        <Card>
                        <CardImage src={recipe.photo} />
                        <CardTitle>{recipe.title}</CardTitle>
                        <CardAuthorAndType>
                            <CardAuthor>{recipe.chef_name}</CardAuthor>
                            <CardType>{recipe.meal_type}</CardType>
                        </CardAuthorAndType>
                        <CardDescription>{recipe.instructions}</CardDescription>
                    </Card>
                </Link>
        })}
      </Container>
    );
}

export default RecipeList;