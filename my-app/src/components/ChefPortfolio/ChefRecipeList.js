import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ChefPortfolioPage.css';


function ChefRecipeList() {
    const [chef, setChef] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:3000/recipes')
        .then( res => {
            setChef(res.data);
        })
        .catch(errors => {
            console.log( 'The data was not returned', errors )
        })
    }, []);
    
    return(
        <>
        <div>
            <h3>My Recipes</h3>
            <section  className = 'chef-list grid-view'>
                {chef.map( chef => (
                    <div width ='400' className='recipeList' key={chef.id}>
                        <h2> {chef.title}</h2>
                        <img width='300'
                        className ='chef-photo'
                        src = {chef.image}
                        alt = {chef.title}
                        />
                    </div>
                ))}
            </section>
        </div>
        </>
    )
}
export default ChefRecipeList