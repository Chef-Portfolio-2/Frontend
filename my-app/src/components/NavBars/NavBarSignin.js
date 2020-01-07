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

const NavBarSignin = () =>{
    return (
        
      <NavBar>
      <Link to="/" className="nav-links">
        Home
      </Link>
      <Link to="/recipepage/" className="nav-links">
        Recipes
      </Link>
      <Link to="/" className="nav-links">
        <span className="home-link">Chow</span>
      </Link>
      <Link to="/chefportfolio" className="nav-links">
        Portfolio
      </Link>
      <Link to="/login" className="nav-links">
        Login
      </Link>
    </NavBar>
    )
}

export default NavBarSignin