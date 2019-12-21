import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ChefRecipeList from './ChefRecipeList';


function ChefPortfolioPage() {
    return(
        <>
            <h1>Chef Portfolio Page</h1>
            <div className='headContainer'>
                <h2> Account </h2>
                <div>
                    <img src ='/' /> 
                    <div className= 'chefInfo'>
                        <p>Name: </p>
                        <p>Email: </p>
                        <p>Location: </p>
                    </div>
                </div>
            </div>
            <ChefRecipeList />
        </>
    )
}
export default ChefPortfolioPage