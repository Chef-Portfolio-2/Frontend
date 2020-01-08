  
import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import axios from "axios";
import './Login.css';

// styles

const Container = styled.div `
display: flex;
border: 1px solid black;
border-radius: 5px;
margin-left: 35%;
margin-right: 35%;
height: auto;
width: 100%;
justify-content: center;
align-content: center;
background: #32B672;

`

const Welcome = styled.h1 `
color: white;
`









function LoginForm({errors, touched, Values}) {

    return (
      <Container className="container">
        <Form
        //   onSubmit={this.handleSubmit}
          className="login"
        >
          
          <Welcome className="Welcome">
            Welcome back! Please sign in.
          </Welcome>
          {touched.username && errors.username && <p>{errors.username}</p>} 
          <Field
            type="text"
            name="username"
            className="username"
            placeholder="Username"
            // onChange={this.handleChange}
          /><br/>
        {touched.password && errors.password && <p>{errors.password}</p>} 
          <Field
            type="password"
            name="password"
            className="pwInput"
            placeholder="Password"
            // onChange={this.handleChange}
          /><br/>
          <button 
            className="Submit"
            type="submit"
          >
            Login!
          </button>
        </Form>

      </Container>
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
            email: Yup.string()
              .username("please enter a valid username")
              .required("username is required"),
            password: Yup.string()
              .min(6, "password must be 6 characters or longer")
              .required("Password is required")
          }),
        // handle submit
        handleSubmit(values) {
              axios
                .post("/api/auth/login", values)
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