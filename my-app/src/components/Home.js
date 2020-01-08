import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import NavBarSignOut from './NavBars/NavBarSignOut';
import Footer from './Footer';

const SiteTitle = styled.h1`
    margin: 50px auto;
    width: 100%;
    text-align: center;
    font-size: 6rem;
    
`


function Home() {

  return (
    <>
      <NavBarSignOut />
      <div className="home-container">
        <SiteTitle>
          Let's <span className="home-title">Chow</span>
        </SiteTitle>
        <img className="home-image" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
      </div>
      <Footer />
    </>
  );
}

export default Home;