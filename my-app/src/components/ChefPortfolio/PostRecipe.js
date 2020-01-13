import React, { useState } from 'react';
import { axiosWithAuth } from '../axiosAuthenticate/axiosWithAuth.js';
import './ChefPortfolioPage.css'

 const PostRecipe = (recipe) => {
    const defaultRecipe = {
        chef_name:'',
        title: '',
        photo: '',
        meal_type: '',
       ingredients: '',
        instructions: ''
        
    }
    const [postRecipe, setPostRecipe] = useState(defaultRecipe);
    const handleChange = (event) => {
        setPostRecipe({ ...postRecipe, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosWithAuth()
        .post( 'https://chef-portfolio-2.herokuapp.com/api/posts', postRecipe)
        .then((res) => {
            console.log(res);
            setPostRecipe(defaultRecipe);
        })
        .catch((err) => console.log(err));
    }

    return (
        <div className='postRecipeContainer'>
            <h6>Add A Recipe</h6>
            <form onSubmit={handleSubmit}>
            <input className='textFile'
                    type='text'
                    name='chef_name'
                    placeholder='Name'
                    value={recipe.chef_name}
                    onChange={handleChange}
                />
                <input className='textFile'
                    type='text'
                    name='title'
                    placeholder= 'Title'
                    value={recipe.title}
                    onChange={handleChange}
                />                
                <input className='textFile'
                    type='text'
                    name='photo'
                    placeholder= 'Image Url'
                    value={recipe.photo}
                    onChange={handleChange}
                />
                <input className='textFile'
                    type='text'
                    name='meal_type'
                    placeholder='Type'
                    value={recipe.meal_type}
                    onChange={handleChange}
                />
                 <textarea className='textFile'
                    type='textarea'
                    name='ingredients'
                    placeholder='Ingredients'
                    value={recipe.ingredients}
                    onChange={handleChange}
                />
                 <textarea className='textFile'
                    type='textarea'
                    name='instructions'
                    placeholder='Instructions'
                    value={recipe.instructions}
                    onChange={handleChange}
                />
                <button type='submit'>Add Recipe</button>
                <input type='reset' className='reset' />
            </form>
        </div>
    )
}

export default PostRecipe;