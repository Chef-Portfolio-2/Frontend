import React, { useState } from 'react';
import { axiosWithAuth } from '../axiosAuthenticate/axiosWithAuth.js';

 const PostRecipe = (recipe) => {
    const defaultRecipe = {
        title: '',

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
                
                    <p>Title</p>
                    <input 
                        type='text'
                        name='title'
                        value={recipe.title}
                        onChange={handleChange}
                    />
                <button type='submit'>Add Recipe</button>
            </form>
        </div>
    )
}

export default PostRecipe;