import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styles from '../components/signin_up.module.css'; // فرض کنید فایل CSS شما در همین مسیر است

export default function Signup() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  });

  const [registerError, setRegisterError] = useState(null);

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post("https://teamup.liara.run/accounts/register/", values);
      console.log(response);
      resetForm(); 
      toast.success('Registration successful!', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: { width: "fit-content", 
          maxWidth: "250px", 
          whiteSpace: "nowrap" } ,
      });
    } catch (error) {
      console.log(error);
    } finally {
      console.log(error); 
    }
  };

  return (
    <div className={styles.amirsignupqq}>
    <div className={`${styles.wrapper} ${styles.signUp}`}>
      <div className={styles.form}>
        <div className={styles.heading}>CREATE AN ACCOUNT</div>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <div className={styles.field}>
                <label htmlFor="username">Username</label>
                <Field type="text" id="username" placeholder="Enter your username" name="username" />
                <ErrorMessage name="username" component="div" className={styles.error} />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">E-Mail</label>
                <Field type="email" id="email" placeholder="Enter your Email" name="email" />
                <ErrorMessage name="email" component="div" className={styles.error} />
              </div>
              <div className={styles.field}>
                <label htmlFor="password">Password</label>
                <Field type="password" id="password" placeholder="Enter your password" name="password" />
                <ErrorMessage name="password" component="div" className={styles.error} />
              </div>
              <div className={styles.button}>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <h2 className={styles.or}>OR</h2>
        <p className={styles.account}>
            Have an account? <Link to="/login" className={styles.textpage}>Log In</Link>
        </p>
        {registerError && <p className={styles.error}>{registerError}</p>}
      </div>
    </div>
    <ToastContainer position="top-left" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable theme="light" />
    </div>
  );
}
