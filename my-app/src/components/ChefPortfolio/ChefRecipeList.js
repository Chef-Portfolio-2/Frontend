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
                    <div className= 'recipeContainer'>
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
                        </div>
                        <button className ='editButton'> Edit</button>
                        <button className='deleteButton'>Delete</button>
                    </div>
                ))}
            </section>
        </div>
        </>
    )
}
export default ChefRecipeList