  
import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import axios from "axios";
import './Login.css';
import NavBarSignin from '../components/NavBars/NavBarSignin';

// styles

const Container = styled.div `
display: flex;
border: 1px solid black;
border-radius: 5px;
margin-left: 35%;
margin-right: 35%;
height: 600px;
width: 100%;
justify-content: center;
align-content: center;
background:linear-gradient(to bottom, #4ee677 5%, #32b672 100%);
padding-top: 10%;

`

const Welcome = styled.h1 `
color: white;


`
const Email = styled.div`
display: flex;
align-content: center;
justify-content: center;
padding-top: 10%;



`
const Password = styled.div`
display: flex;
align-content: center;
justify-content: center;
padding-bottom: 10%;
;

`
const Button = styled.button`
box-shadow: 3px 4px 0px 0px black;
background-color: white;
border-radius:15px;
border:2px solid #4e6096;
display:inline-block;
cursor:pointer;
color:#32B672;
font-family:Arial;
font-style: italic;
font-size:17px;
padding:7px 25px;
text-decoration:none;
text-shadow:0px 1px 0px #32B675;
margin-bottom: 10%;
margin-right: 50%;
margin-left: 40%;
`




function LoginForm({errors, touched, Values}) {

    return (
        <>
        <NavBarSignin />
      <Container className="container">
        <Form
        //   onSubmit={this.handleSubmit}
          className="login"
        >
          
          <Welcome className="Welcome">
            Welcome back! Please sign in.
          </Welcome>
          <Email>
          {touched.email && errors.email && <p className = "text">{errors.email}</p>}
          <Field
            type="email"
            name="email"
            className="emailInput"
            placeholder="email"
            // onChange={this.handleChange}
          /></Email><br/>
          <Password>
        {touched.password && errors.password && <p className = "text">{errors.password}</p>} 
          <Field
            type="password"
            name="password"
            className="pwInput"
            placeholder="Password"
            // onChange={this.handleChange}
          /></Password><br/>
          <Button 
            className="Submit"
            type="submit"
          >
            Login!
          </Button>
        </Form>

      </Container>
      </>
    );
}

    const FormikLoginForm = withFormik({

        mapPropsToValues({ email, password }) {
            return {
               email: email || "",
               password: password || ""  
            };
        },
        // validation schema
        validationSchema: Yup.object().shape({
            email: Yup.string()
              .email("please enter a valid Email")
              .required("Email is required"),
            password: Yup.string()
              .min(6, "password must be 6 characters or longer")
              .required("Password is required")
          }),
        // handle submit
        handleSubmit(values) {
              axios
                .post("https://chef-portfolio-2.herokuapp.com/api/auth/login", values)
                .then(res => {
                  console.log(values); // Data was created successfully and logs to console
                })
                .catch(err => {
                  console.log(err); // There was an error creating the data and logs to console
                });
            }
        // axios post here
    }) (LoginForm);

export default FormikLoginForm;