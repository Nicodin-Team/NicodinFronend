import React, { useState } from "react";
import { Link } from "react-router-dom";

import '../components/signin_up.css';
import axios from "axios";

export default function Signup() {

  const [email, setEmail]=useState("")
  const [username, setUsername]=useState("")
  const [password, setPassword]=useState("")

  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }
  const handleUsername=(e)=>{
    setUsername(e.target.value)
  }
  const handlepass=(e)=>{
    setPassword(e.target.value)
  }

  // const handlechange = (e) => {
	// 	const {email,value} = e.target
	// 	setUser({
	// 		...user , [email]:value
	// 	})
   
	// }
  
  const register = async () => {
    // console.log(username)
    // console.log(email)
    // console.log(password)
    
    if(email && password && username) {
      try {
        console.log({
          username:username,
          email:email,
          password:password
        })
        const response = await axios.post('https://teamup.liara.run/accounts/register/',{
          username:username,
          email:email,
          password:password
        })
        console.log(response)
        setEmail('')
        setUsername('')
        setPassword('')
      } catch (error) {
        console.log(error.message)
      }
    } else{
      console.log(email)
      console.log(username)
      console.log(password)
      alert('Invalid input')
    }
  }

  return (
    <div className="wrapper signUp">
      <div className="form">
        <div className="heading">CREATE AN ACCOUNT</div>
        <form>
          <div>
            <label htmlFor="name">Username</label>
            <input type="text" id="name" placeholder="Enter your name" value={username}  onChange={handleUsername}/>
          </div>
          <div>
            <label htmlFor="name">E-Mail</label>
            <input type="email" id="name" placeholder="Enter your mail"  value={email}   onChange={handleEmail}/> 
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              type="password"
              id="password"
              placeholder="Enter you password"
              onChange={handlepass}
            />
          </div>
          <div className="button">
            <button type="button" onClick={register}>Submit</button>
          </div>
          <h2  className="or">
            OR
          </h2>
        </form>
        <p className="account">
          Have an account ? <Link to="/" className="log"> Log In </Link>
        </p>
      </div>
    </div>
  );
}
