import React from "react";
import { Link } from "react-router-dom";
import '../components/signin_up.css';

export default function Signup() {
  return (
    <div className="wrapper signUp">
      <div className="form">
        <div className="heading">CREATE AN ACCOUNT</div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="name">E-Mail</label>
            <input type="text" id="name" placeholder="Enter your mail" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter you password"
            />
          </div>
          <button type="button">Submit</button>
          <h2 textAlign="center" className="or">
            OR
          </h2>
        </form>
        <p>
          Have an account ? <Link to="/"> Log In </Link>
        </p>
      </div>
    </div>
  );
}
