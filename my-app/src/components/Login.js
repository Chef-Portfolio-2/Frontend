import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function LoginForm({errors, touched }) {

    return(
        <div className = "loginForm">
            {console.log()};
            <Form>
                <div>
                    {touched.email && errors.email && <p>{errors.email}</p>}
                    {/* shows error message */}
                    <Field 
                    type = "email"
                    name = "email"
                    placeholder = "Email"
                    />
                </div>
                <div>
                    {touched.password && errors.password && <p>{errors.email}</p>}
                    <Field
                    type = "password"
                    name = "password"
                    placeholder = "Password"
                    />
                    <button>Login Here!</button>
                </div>
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

    // validation Schema:

    validationSchema: Yup.object().shape({
        email: Yup.string().email("Email is not Valid").required("Please input an email"),
        password: Yup.string().min(6, "Password must be 6 characters or longer").required("Password is required")
    }),

    // handleSubmit(values) {
    //     console.log(values);
    // }
})(LoginForm);

export default FormikLoginForm;