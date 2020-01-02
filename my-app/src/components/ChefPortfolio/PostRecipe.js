import React, { useState } from 'react';
import { axiosWithAuth } from '../axiosAuthenticate/axiosWithAuth.js';
import './ChefPortfolioPage.css'

 const PostRecipe = (recipe) => {
    const defaultRecipe = {
        title: '',
        image: '',
        type: ''
    }
    const [postRecipe, setPostRecipe] = useState(defaultRecipe);
    
    const handleChange = (event) => {
        setPostRecipe({ ...postRecipe, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosWithAuth()
        .post( 'http://localhost:3000/recipes', postRecipe)
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
                <input className='imageFile'
                    type='file'
                    name='file'
                    value={recipe.image}
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
                    name='type'
                    placeholder='Type'
                    value={recipe.type}
                    onChange={handleChange}
                />
                <button type='submit'>Add Recipe</button>
            </form>
        </div>
    )
}

export default PostRecipe;