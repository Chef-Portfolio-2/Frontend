import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {axiosWithAuth} from '../axiosAuthenticate/axiosWithAuth.js'
import './ChefPortfolioPage.css';
import EditModal from '../editModal';


const initialRecipe = {
     chef_name:'',
        title: '',
        photo: '',
        meal_type: '',
       ingredients: '',
        instructions: ''
};

const ChefRecipeList = ({recipes, updateRecipes}) => {
    const [editing, setEditing] = useState(false);
    const[recipeToEdit, setRecipeToEdit] = useState(initialRecipe);
    
    const editRecipe = recipe => {
        setEditing(true);
        setRecipeToEdit(recipe);
    };

    const handleChange = e => {
        setRecipeToEdit({...recipeToEdit, [e.target.name]: e.target.value})
    }
    const saveEdit = e => {
        e.preventDefault();
        axiosWithAuth()
        .put(`https://chef-portfolio-2.herokuapp.com/api/posts/${recipeToEdit.id}`, recipeToEdit)
        .then(res => {
            setEditing(false)
        })
    };

    const deleteRecipe = recipe => {
        axiosWithAuth()
        .delete(`https://chef-portfolio-2.herokuapp.com/api/posts/${recipe.id}`)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    };
    
    return(
        <>
        <div className='RecipeContainer'>
            <h3 className = 'RecipeListTitle'>My Recipes</h3>
            {editing && (
                <form className='editForm' onSubmit={saveEdit}>
                    <input className='EdittextFile'
                    type='text'
                    name='chef_name'
                    placeholder='Name'
                    value={recipeToEdit.chef_name}
                    onChange={handleChange}
                />
                <input className='EdittextFile'
                    type='text'
                    name='title'
                    placeholder= 'Title'
                    value={recipeToEdit.title}
                    onChange={handleChange}
                />                
                <input className='EdittextFile'
                    type='text'
                    name='photo'
                    placeholder= 'Image Url'
                    value={recipeToEdit.photo}
                    onChange={handleChange}
                />
                <input className='EdittextFile'
                    type='text'
                    name='meal_type'
                    placeholder='Type'
                    value={recipeToEdit.meal_type}
                    onChange={handleChange}
                />
                 <textarea className='EdittextFile'
                    type='textarea'
                    name='ingredients'
                    placeholder='Ingredients'
                    value={recipeToEdit.ingredients}
                    onChange={handleChange}
                />

                 <textarea className='EdittextFile'
                    type='textarea'
                    name='instructions'
                    placeholder='Instructions'
                    value={recipeToEdit.instructions}
                    onChange={handleChange}
                />
                <button className='reset' type='submit' onClick={()=> setEditing(true)}>Add Recipe</button>
                <input type='reset' className='reset' />
                </form>
            )}
            <section  className = 'chef-list grid-view'>
                {recipes.map( chef => (
                    <div width ='400' className='recipeList' key={chef.id} onClick={() => editRecipe(chef)}>
                        <img width='350' height='250'
                            className ='recipeImg'
                            src = {chef.photo}
                            alt = {chef.title}
                        />
                        <div className='typeContainer'>
                            <h5 className='typeName'> {chef.meal_type}</h5>
                        </div>
                            <h4> {chef.title}</h4>
                            <div className='buttonContainer'>
                                <button className ='editButton' onClick={() => editRecipe(chef)}> Edit</button> 
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