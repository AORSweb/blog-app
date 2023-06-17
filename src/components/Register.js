import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../sass/components/login-register.scss';

const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    let navigate = useNavigate(); 

    const routeChange = ()=>{
        let path = '/login'; 
        navigate(path);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            {/* <label htmlFor="name">Full Name:</label> */}
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
            {/* <label htmlFor="email">Email:</label> */}
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email ID" id="email" name="email" />
            {/* <label htmlFor="password">Password:</label> */}
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
            <button className="login-signUp" type="submit">Sign Up</button>
        </form>
        <button className="link-btn" onClick={routeChange}>Already have an account? Login here.</button>
    </div>
    )
}

export default Register;