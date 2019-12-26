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
    
    const editRecipe = recipe => {
        setEditing(true);
        setRecipeToEdit(recipe);
    };

    const saveEdit = e => {
        e.preventDefault();
        axiosWithAuth()
        .put(`http://localhost:3000/recipes/${recipeToEdit}`, recipeToEdit)
        .then(res => {
            setEditing(false)
        })
    };

    const deleteRecipe = recipe => {
        axios
        .delete(`http://localhost:3000/recipes/${recipe.id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    };
    
    return(
        <>
        <div>
            <h3 className = 'RecipeListTitle'>My Recipes</h3>
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
                            <div className='buttonContainer'>
                                <button className ='editButton' onClick={() => editRecipe(chef)}> Edit</button>
                                <button className='deleteButton' onClick={() => deleteRecipe(chef)} >Delete</button>{' '}
                            </div>
                    </div>
                   
                ))}
                {editing && (
                    <form onSubmit = {saveEdit} >
                        <legend> Edit Recipe</legend>
                    </form>
                )}
            </section>
        </div>
        </>
    )
}
export default ChefRecipeList