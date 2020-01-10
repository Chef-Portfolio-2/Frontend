import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Ul = styled.ul`
display: flex;
flex-direction: row;
align-content: center;
justify-content: space-around;

`
const Container = styled.footer`
background: #32b672; 
margin-top: auto;
`




const Footer = () => {
    return (
        <Container>
            <Ul className = "fa-ul">
                <li>Discover New Ways to Eat! &trade; </li>
                <li>
                    <li><Link to="/Register">Register Here!</Link></li>
                    <li><Link to="/contact">Contact Us!</Link></li>
                </li>
                <li><address> P Sherman, <br/>
                    42 Wallaby Way<br/>
                    Sydney, Austraila </address>
                </li>
                <li> &copy;Chow!</li>
            </Ul>
        </Container>
    )

}
export default Footer;