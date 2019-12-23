import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {axiosWithAuth} from '../axiosAuthenticate/axiosWithAuth.js'
import './ChefPortfolioPage.css';

const initialRecipe = {
    recipe:""
};

const ChefRecipeList = ({recipes, updateRecipes}) => {
    console.log(recipes);
    const [editing, setEditing] = useState(false);
    const[recipeToEdit, setRecipeToEdit] = useState(initialRecipe);
    

    
    return(
        <>
        <div>
            <h3>My Recipes</h3>
            <section  className = 'chef-list grid-view'>
                {recipes.map( chef => (
                    <div width ='400' className='recipeList' key={chef.id}>
                        <img width='350'
                            className ='recipeImg'
                            src = {chef.image}
                            alt = {chef.title}
                        />
                        <div className='typeContainer'>
                            <h5 className='typeName'> {chef.type}</h5>
                            </div>
                            <h4> {chef.title}</h4>
                            <button className ='editButton'> Edit</button>
                            <button className='deleteButton'>Delete</button>
                        </div>
                   
                ))}
            </section>
        </div>
        </>
    )
}
export default ChefRecipeList