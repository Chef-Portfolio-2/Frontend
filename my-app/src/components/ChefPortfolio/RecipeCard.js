import React, {useState, useEffect} from 'react';
import styled from 'styled-components';



const Card = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 30%;
    border: 1px solid red;
    margin: 5px 5px;
`;

const CardTitle=styled.h2`
    color: red;
    font-size: 18px;
    text-align: center;
    margin: 8px auto 0 auto;
    border: 1px solid blue;
`

const CardImage = styled.img`
    max-width: 250px;
    max-height:150px;
    
    overflow: hidden;
`

const RecipeCard = ({recipe}) => {

    return (
        <Card>
            <CardImage src={recipe.image} />
            <CardTitle>{recipe.title}</CardTitle>
        
        </Card>
    )

}
export default RecipeCard;