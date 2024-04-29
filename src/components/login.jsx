import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Login() {
	const [email,setEmail]=useState("");
	const [password,setPassword]=useState("");

	
    const preventRefresh = (e) => {
		e.preventDefault();
		console.log({
			email: email,
			password: password
		})
		axios.post('https://teamup.liara.run/api/token/',{
			email: email,
			password: password
		})
		.then(res => {console.log(res);
			setEmail("")
			setPassword("")
		})
	};

	return (
		<div className="wrapper signIn">
			<div className="form">
				<div className="heading">LOGIN</div>
				<form className='wap'>
					<div>
						<label htmlFor="email">E-Mail</label>
						<input type="email" id="email" placeholder="Enter you email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input type="password" id="password" placeholder="Enter you password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
					</div>
					<button type="button"  onClick={preventRefresh}>
						Submit
					</button>
				</form>
				<p>
					Don't have an account ? <Link to="/signup" className='link'> Sign Up </Link>
				</p>
			</div>
		</div>
	);
}
