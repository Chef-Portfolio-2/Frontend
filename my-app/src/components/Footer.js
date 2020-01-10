import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const Ul = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
height: 25%;

`
const Container = styled.footer`
background: #32b672; 
display: flex;
flex-direction: column;
justify-content: space-between;
align-content: bottom;
margin-top: 10px;
height: auto;
position: absolute;
bottom: -10;
width: 100%;
`

const List = styled.li`
color: black;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-right: 40px;
margin-bottom: 00px;
padding-top: 25px;

`


const Footer = () => {
    return (
        <Container>
        <Ul>
            <List>Discover New Ways to Eat! &trade; </List>
                <List>
                    <Link to="/Register"><List>Register Here!</List></Link>
                    <Link to="/contact"><List>Contact Us!</List></Link>
                </List>
                <List><address>
                    42 Wallaby Way<br/>
                    Sydney, Austraila </address>
                </List>
                <List> &copy;Chow!</List>
            </Ul>
            
        </Container>
    )

}
export default Footer;