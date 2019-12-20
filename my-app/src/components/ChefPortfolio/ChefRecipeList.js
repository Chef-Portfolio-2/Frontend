import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';


function ChefRecipeList() {
    const [chef, setChef] = useState([]);

    useEffect(() => {
        axios
        .get('')
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
            <section className = 'chef-list grid-view'>
                {chef.map( chef => (
                    <div key={chef.id}>
                        <img
                        className ='chef-photo'
                        src = {chef.item_photo}
                        alt = {chef.chef_name}
                        />
                        <h2>{chef.chef_name}'s {chef.recipe.title}</h2>
                    </div>
                ))}
            </section>
        </div>
        </>
    )
}
export default ChefRecipeList