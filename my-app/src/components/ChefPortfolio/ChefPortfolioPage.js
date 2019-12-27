import React, {useState, useEffect} from 'react';
import ChefRecipeList from './ChefRecipeList';
import axios from 'axios'
import {axiosWithAuth} from '../axiosAuthenticate/axiosWithAuth';



function ChefPortfolioPage() {
    //call on axios to get the chef's login info to populate here
    const [chef, setChef] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('http://localhost:3000/recipes')
        .then( res => {
            setChef(res.data);
        })
        .catch(errors => {
            console.log( 'The data was not returned', errors )
        })
    });
    return(
        <>
            <div className='headContainer'>
                <h3> Account </h3>
                <div>
                    <img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAiRjeHqC26SHWGgBOlwulRONJSgZXg1XNsybBoa-iPwgH1wHutQ&s' /> 
                    <div className= 'chefInfo'>
                        <p>Name: </p>
                        <p>Email: </p>
                        <p>Location: </p>
                    </div>
                </div>
            </div>
            <ChefRecipeList recipes={chef} updateRecipes={setChef}/>
        </>
    )
}
export default ChefPortfolioPage