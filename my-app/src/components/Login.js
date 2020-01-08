  
import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "styled-components";
import axios from "axios";
import '../App.css';

function LoginForm({errors, touched, Values}) {

    return (
      <div className="container">
        <Form
        //   onSubmit={this.handleSubmit}
          className="login"
        >
          
          <h1 className="Welcome">
            Welcome back! Please sign in.
          </h1>
          {touched.email && errors.email && <p>{errors.email}</p>} 
          <Field
            type="email"
            name="email"
            className="emailInput"
            placeholder="Email"
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

      </div>
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
                .post("https://reqres.in/api/users/", values)
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