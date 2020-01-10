  
import React, { useEffect } from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import './Login.css';
import {axiosWithAuth} from './axiosAuthenticate/axiosWithAuth';
import { Link } from 'react-router-dom';

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
      <Container className="container">
        <Form 
          // onSubmit={this.handleSubmit}
          className="login"
        >
          
          <Welcome className="Welcome">
            Welcome back! Please sign in.
          </Welcome>
          <Email>
          {touched.username && errors.username && <p className = "text">{errors.username}</p>}
          <Field
            type="text"
            name="username"
            className="emailInput"
            placeholder="Username"
            autoComplete="username"
            // onChange={this.handleChange}
          /></Email><br/>
          <Password>
        {touched.password && errors.password && <p className = "text">{errors.password}</p>} 
          <Field
            type="password"
            name="password"
            className="pwInput"
            placeholder="Password"
            autoComplete="current-password"
            // onChange={this.handleChange}
          /></Password><br/>
          <Button 
            className="Submit"
            type="submit"
            
          >
            Login!
          </Button>
          <Link to="/register" className="newsUser">New User? Register Here!</Link>
        </Form>
      

      </Container>
      </>
    );
}

    const FormikLoginForm = withFormik({

        mapPropsToValues({ username, password }) {
            return {
               username: username || "",
               password: password || ""  
            };
        },
        // validation schema
        validationSchema: Yup.object().shape({
            username: Yup.string()
              .required("Username is required"),
            password: Yup.string()
              .min(3, "password must be 6 characters or longer")
              .required("Password is required")
          }),
        // handle submit
        handleSubmit (values, {props, resetForm, setSubmitting}) {
          
              axiosWithAuth()
                .post("https://chef-portfolio-2.herokuapp.com/api/auth/login", values)
                .then(res => {
                  console.log(values);
                  console.log(res) // Data was created successfully and logs to console
                  localStorage.setItem('token', res.data.token);
                  localStorage.setItem('chef_id', res.data.id);
                  props.history.push('/chefportfolio');
                  resetForm();
                
                  
                  
                })
                .catch(err => {
                  console.log(err); // There was an error creating the data and logs to console
                  
                });
            }
        // axios post here
    }) (LoginForm);

export default FormikLoginForm;