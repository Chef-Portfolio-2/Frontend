import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {axiosWithAuth} from '../axiosAuthenticate/axiosWithAuth.js'
import './ChefPortfolioPage.css';
import EditModal from '../editModal';


const initialRecipe = {
    recipe:" "
};

const ChefRecipeList = ({recipes, updateRecipes}) => {
    const [editing, setEditing] = useState(false);
    const[recipeToEdit, setRecipeToEdit] = useState(initialRecipe);
    
    const editRecipe = recipe => {
        setEditing(true);
        setRecipeToEdit(recipe);
    };

    const saveEdit = e => {
        e.preventDefault();
        axiosWithAuth()
        .put(`https://chef-portfolio-2.herokuapp.com/api/posts/${recipeToEdit}`, recipeToEdit)
        .then(res => {
            setEditing(false)
        })
    };

    const deleteRecipe = recipe => {
        axios
        .delete(`https://chef-portfolio-2.herokuapp.com/api/posts${recipe.id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    };
    
    return(
        <>
        <div className='RecipeContainer'>
            <h3 className = 'RecipeListTitle'>My Recipes</h3>
            <section  className = 'chef-list grid-view'>
                {recipes.map( chef => (
                    <div width ='400' className='recipeList' key={chef.id}>
                        <img width='350'
                            className ='recipeImg'
                            src = {chef.photo}
                            alt = {chef.title}
                        />
                        <div className='typeContainer'>
                            <h5 className='typeName'> {chef.meal_type}</h5>
                        </div>
                            <h4> {chef.title}</h4>
                            <div className='instructions'>
                                <p> {chef.instructions}</p>
                            </div>
                            <div className='buttonContainer'>
                                {/* <button className ='editButton' onClick={() => editRecipe(chef)}> Edit</button> */}
                                <EditModal />
                                <button className='deleteButton' onClick={() => deleteRecipe(chef)} >Delete</button>{' '}
                            </div>
                    </div>
                ))}
            </section>
        </div>
        </>
    )
}
export default ChefRecipeList