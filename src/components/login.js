import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../sass/components/login-register.scss';

const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    let navigate = useNavigate(); 

    const routeChange = ()=>{
        let path = '/register'; 
        navigate(path);
    }

    return (
        <div className="auth-form-container">
            <h2>User Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                
                {/* <label htmlFor="email">Email : </label> */}
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email ID" id="email" name="email" />
                {/* <label htmlFor="password">Password:</label> */}
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <button className="login-signUp" type="submit">Log In</button>
            </form>
            <button className="link-btn"  onClick={routeChange}>Don't have an account? Register here.</button>
        </div>
    )
}

export default Login;