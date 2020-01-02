import React, { useState } from 'react';
import { axiosAuthenticate } from '../axiosAuthenticate/axiosWithAuth';

 const PostRecipe = () => {
    const defaultRecipe = {
        title: '',

    }
    const [postRecipe, setPostRecipe] = useState(defaultRecipe);
    
    const handleChange = (event) => {
        setPostRecipe({ ...postRecipe, [event.target.name]: event.target.value });
    };

    return (
        <div className='postRecipeContainer'>
            <h6>Add A Recipe</h6>
        </div>
    )
}

export default PostRecipe;