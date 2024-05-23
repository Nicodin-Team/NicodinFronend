// import React,{useState} from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { Formik, Form, Field, ErrorMessage } from 'formik'; // Import Formik components
// import * as yup from 'yup'; // Import yup for validation
// import '../components/signin_up.css';


// export default function Signup_em() {
//   const initialValues = {
//     username: '',
//     email: '',
//     password: '',
//   };

//   const validationSchema = yup.object().shape({
//     username: yup.string().required('Username is required'),
//     email: yup.string().email('Invalid email format').required('Email is required'),
//     password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
//   });

//   const [registerError, setRegisterError] = useState(null);

//   const onSubmit = async (values, { setSubmitting, resetForm }) => {
//     try {
//       const response = await axios.post('https://teamup.liara.run/accounts/register/', values);
//       console.log(response);
//       resetForm(); // Clear form after successful submission
//     } catch (error) {
//       setRegisterError(error.response?.data?.message || 'Registration failed. Please try again.');
//     } finally {
//       setSubmitting(false); // Allow form submission again
//     }
//   };

//   return (
//     <div className="wrapper signUp">
//       <div className="form">
//         <div className="heading">CREATE AN ACCOUNT</div>
//         <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
//           {({ isSubmitting }) => (
//             <Form>
//               <div>
//                 <label htmlFor="username">Username</label>
//                 <Field type="text" id="username" placeholder="Enter your username" name="username" />
//                 <ErrorMessage name="username" component="div" className="error" />
//               </div>
//               <div>
//                 <label htmlFor="email">E-Mail</label>
//                 <Field type="email" id="email" placeholder="Enter your Email" name="email" />
//                 <ErrorMessage name="email" component="div" className="error" />
//               </div>
//               <div>
//                 <label htmlFor="password">Password</label>
//                 <Field type="password" id="password" placeholder="Enter your password" name="password" />
//                 <ErrorMessage name="password" component="div" className="error" />
//               </div>
//               <div className="button">
//                 <button type="submit" disabled={isSubmitting}>
//                   Submit
//                 </button>
//               </div>
//             </Form>
//           )}
//         </Formik>
//         <h2 className="or">
//           OR
//         </h2>
//         <p className="account">
//           Have an account? <Link to="/login" className="text-warning"> Log In </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import styles from "../components/signin_up.module.css";// Assuming CSS module file is named Signup_em.module.css

export default function Signup_em() {
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
    } catch (error) {
      setRegisterError(error.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setSubmitting(false); 
    }
  };

  return (
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
  );
}
