import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useAuth } from "../context/AuthContext";


export default function Login() {
  const { login } = useAuth();
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await login(values);
      console.log(response);
      resetForm();
    } catch (error) {
      console.log(error);
      setSubmitting(false);
    }
  };

  return (
    <div className="wrapper signIn">
      <div className="form">
        <img
          src={logo}
          alt=""
          style={{
            width: "200px",
            height: "auto",
            marginBottom: "35px",
            marginLeft: "34px",
          }}
        />
        <div className="heading">LOGIN</div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="email">E-Mail</label>
                <Field
                  type="email"
                  id="email"
                  placeholder="Enter your Email"
                  name="email"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  name="password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>
              <div className="button">
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <p>
           Don't have an account?
          <Link to="/signup" className="text-warning">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
