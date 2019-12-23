import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import "./Login.css";


const Login1 = styled.div`
height: auto;
width: auto;
margin-left: 10%;
margin-right: 10%;
padding-top: 20%;
padding-bottom: 20%;
`

const Login = styled.div`
display: flex;
align-content: center;
justify-content: center;
`
const Label = styled.label`
font-weight: 600;
font-size: 20px;
`

const Form1 = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding-bottom: 5%;
width: 70%;
`
const Button = styled.button`
display: flex;
margin-left: 50%;
border: 1px solid white;
border-radius: 50%;
height: 60px; 
width: 60px;
background-color: #32B672;
color: white;
box-shadow: 2px 2px black; 
`
const A1 = styled.a`
display: flex;
align-content: center;
justify-content: center;
margin-left: 40%;
margin-top: 2%;
height: auto; 
width: 30%;
color: black;
`




function LoginForm({errors, touched }) {

    return(
        <Login1 className = "loginForm">
            {console.log()}
            <Form>
                <Login>
                    <Form1>
                    {touched.email && errors.email && <p>{errors.email}</p>}
                    {/* shows error message */}
                    <Label>Email:</Label>
                    <Field className = "field"
                    type = "email"
                    name = "email"
                    placeholder = "Email"
                    />
                    </Form1>
                </Login>
               
                <Login>
                    <Form1>
                    {touched.password && errors.password && <p>{errors.email}</p>}
                    <Label>Password:</Label>
                    <Field className = "field"
                    type = "password"
                    name = "password"
                    placeholder = "Password"
                    />
                    </Form1>
                </Login>
                <Button type="submit">Login Here!</Button>
                <A1 href = "http://localhost:3000/Register/">New User? Register Here!</A1>
            </Form>
        </Login1>
    );
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ email, password }) {
        return {
            email: email || "",
            password: password || ""
        };
    },

    // validation Schema:

    validationSchema: Yup.object().shape({
        email: Yup.string().email("Email is not Valid").required("Required Field"),
        password: Yup.string().min(6, "Password must be 6 characters or longer").required("Required Field")
    }),

    // handleSubmit(values) {
    //     console.log(values);
    // }
})(LoginForm);

export default FormikLoginForm;