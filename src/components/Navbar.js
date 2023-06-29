import React from 'react';
import '../sass/components/navbar.scss';
// import { useNavigate } from "react-router-dom";


function Navbar() {
  // let navigate = useNavigate(); 

  // const routeChange = ()=>{
  //     let path = '/login'; 
  //     navigate(path);
  // }

  return (
    <div className='navbar'>
        <div>icon</div>
        <div className='search--bar'>
            <input type='text' placeholder='Search'/>
        </div> 
        <div className='home-section'>
            <div>Home</div>
            <div>Write a Blog</div>
        </div> 
        
        {/* <div> Profile/<a className='login-section' onClick ={routeChange}>Login</a></div> */}
        <div>Profile</div>
    </div>
  )
}

export default Navbar;