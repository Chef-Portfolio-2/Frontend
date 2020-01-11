import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from './axiosAuthenticate/axiosWithAuth';


const initialRecipe = {
    title: '',
    ingredients: '',
    instructions: '',
    meal_type: '',
    chef:'',
    photo: ''
};

const EditRecipe = ({recipes, updateRecipes}) => {
    console.log('Recipes', recipes);

    const [editing, setEditing] = useState(false);
    const [recipeToEdit, setRecipeToEdit] = useState(initialRecipe);

    const editRecipe = recipe => {
        setEditing(true);
        setRecipeToEdit(recipe);
    };

    const saveEdit = e => {
        e.preventDefault();
        axiosWithAuth()
        .put(`https://chef-portfolio-2.herokuapp.com/api/posts/${recipeToEdit.id}`, recipeToEdit)
        .then(res => {
            setEditing(false)
        })
        
        .catch(err => {
                console.log(err);
        })
    };

    return (
        <>
                    <div className='postRecipeContainer'>
                        <h6>Add A Recipe</h6>
                        <form onSubmit={saveEdit}>
                            <input className='textFile'
                                type='text'
                                name='chef_name'
                                placeholder='Name'
                                value={recipeToEdit.chef_name}
                                onChange={e => setRecipeToEdit({ ...recipeToEdit, recipe:e.target.value})}
                            />
                            <input className='textFile'
                                type='text'
                                name='title'
                                placeholder= 'Title'
                                value={recipes.title}
                                onChange={e => setRecipeToEdit({ ...recipeToEdit, recipe:e.target.value})} 
                                />                
                            <input className='textFile'
                                type='text'
                                name='photo'
                                placeholder= 'Image Url'
                                value={recipeToEdit.photo}
                                onChange={e => setRecipeToEdit({ ...recipeToEdit, recipe:e.target.value})}
                            />
                            <input className='textFile'
                                type='text'
                                name='meal_type'
                                placeholder='Type'
                                value={recipeToEdit.meal_type}
                                onChange={e => setRecipeToEdit({ ...recipeToEdit, recipe:e.target.value})}
                            />
                            <textarea className='textFile'
                                type='textarea'
                                name='ingredients'
                                placeholder='Ingredients'
                                value={recipeToEdit.ingredients}
                                onChange={e => setRecipeToEdit({ ...recipeToEdit, recipe:e.target.value})}
                            />
                            <textarea className='textFile'
                                type='textarea'
                                name='instructions'
                                placeholder='Instructions'
                                value={recipeToEdit.instructions}
                                onChange={e => setRecipeToEdit({ ...recipeToEdit, recipe:e.target.value})}
                            />
                            <button type='submit'>Add Recipe</button>
                            <button className='reset' onClick={()=> setEditing(false)}> Cancel </button>
                        </form>
                    </div>
                            
                )
                        
                    
                
        </>
    )

}

export default EditRecipe;