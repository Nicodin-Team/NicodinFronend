
import React from "react";
import { Link , useNavigate} from "react-router-dom";
import logo from "../assets/Images/logo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useAuth } from "../context/AuthContext";
import styles from "../components/signin_up.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  
 

  const notifySuccess = () => {
    toast.success('🦄 Login successful!', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  

  const notifyError = () => {
    toast.error('❌ Login failed: User not found', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  
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

  const onSubmit = async (values, { resetForm }) => {
    
    try {
      const response = await login(values);
        resetForm();
        notifySuccess();
        navigate('/profile');
    } catch (error) {
      console.error(error);
      notifyError('An error occurred');
    }
  };

//save
//login
  return (
 
    <div className={styles.amirloginqq}>
     
        <div className={`${styles.wrapper} ${styles.signIn}`}>
          <div className={styles.form}>
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
            <div className={styles.heading}>LOGIN</div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className={styles.field}>
                    <label htmlFor="email">E-Mail</label>
                    <Field
                      type="email"
                      id="email"
                      placeholder="Enter your Email"
                      name="email"
                    />
                    <ErrorMessage name="email" component="div" className={styles.error} />
                  </div>
                  <div className={styles.field}>
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
                      className={styles.error}
                    />
                  </div>
                  <div className={styles.button}>
                    <button type="submit" disabled={isSubmitting} >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
          
                  </div>
                  <ToastContainer
                    position="top-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    
                    />
                </Form>
              )}
            </Formik>
            <p style={{marginLeft:'35px'}}>
              Don't have an account?
              <Link to="/signup" className={styles.textpage}>
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        <ToastContainer position="top-left" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable theme="light" />

      </div>
      
  );
}
