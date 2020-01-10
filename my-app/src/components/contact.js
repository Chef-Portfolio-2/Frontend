import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import "./Contact.css";
import { axiosWithAuth } from "./axiosAuthenticate/axiosWithAuth";
import { Link } from "react-router-dom";
import NavBarSignin from "./NavBars/NavBarSignin";
import Footer from "./Footer";
import axios from 'axios';

// styles

const Container = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 5px;
  margin-left: 35%;
  margin-right: 35%;
  margin-bottom: 25%;
  height: 50vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #4ee677 5%, #32b672 100%);
`;

const Welcome = styled.h1`
  color: white;
  margin-bottom: 5%;
`;
const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
`;
const Email = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
`;
const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;
const Button = styled.button`
  box-shadow: 3px 4px 0px 0px black;
  background-color: white;
  border-radius: 15px;
  border: 2px solid #4e6096;
  display: inline-block;
  cursor: pointer;
  color: #32b672;
  font-family: Arial;
  font-style: italic;
  font-size: 17px;
  padding: 7px 25px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #32b675;
  margin: auto;
`;

const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`

function ContactForm({ errors, touched, Values }) {
  return (
    <>
      <Body>
        <NavBarSignin />
        <Container className="container">
          <Form
            // onSubmit={this.handleSubmit}
            className="contact-form"
          >
            <Welcome className="Welcome">
              Questions? Concerns? Get in touch.
            </Welcome>
            <Name>
              {touched.name && errors.name && (
                <div className="text">{errors.name}</div>
              )}
              <Field
                type="text"
                name="name"
                className="nameInput"
                placeholder="What's your name?"
                // onChange={this.handleChange}
              />
            </Name>
            <Email>
              {touched.email && errors.email && (
                <div className="text">{errors.email}</div>
              )}
              <Field
                type="email"
                name="email"
                className="emailInput"
                placeholder="What's your email?"
                // onChange={this.handleChange}
              />
            </Email>
            <Message>
              {touched.message && errors.message && (
                <div className="text">{errors.message}</div>
              )}
              <Field
                component="textarea"
                name="message"
                className="messageInput"
                placeholder="What's on your mind?"
                // onChange={this.handleChange}
              />
            </Message>
            <Button className="submit" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
        
      </Body>
      <Footer />
    </>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ name, email, message }) {
    return {
      name: name || "",
      email: email || "",
      message: message || ""
    };
  },
  // validation schema
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Your name is required"),
    email: Yup.string().required("Please use a valid email address"),
    message: Yup.string().required("Please submit a message")
  }),
  // handle submit
  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submitting", values);
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log("success", res);
        setStatus(res.data);
        alert("Thanks for contacting us!")
        //clears form inputs, from FormikBag
        resetForm();
      })
      .catch(err => console.log(err.response));
  }
})(ContactForm);

export default FormikLoginForm;
