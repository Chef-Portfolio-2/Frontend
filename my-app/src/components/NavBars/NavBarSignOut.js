import React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';

const NavBar=styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  margin: auto;

`

const NavBarSignOut = () =>{
    const handleLogout = () => {
        localStorage.removeItem("token");
        console.log('logged out button triggered')
    }
    return (
        
      <NavBar>
        <a href="https://elated-meninsky-14c15a.netlify.com/" className="nav-links">
            Home
        </a>
        <Link to="/recipelist" className="nav-links">
            Recipes
        </Link>
        <Link to="/" className="nav-links">
            <span className="home-link">Chow</span>
        </Link>
        <Link to="/chefportfolio" className="nav-links">
            Portfolio
        </Link>
        <Link to="/login" className="nav-links" onClick={handleLogout}>
            Sign Out
        </Link>
    </NavBar>
    )
}

export default NavBarSignOut