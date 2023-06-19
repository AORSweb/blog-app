import React from 'react';
import '../sass/components/navbar.scss';

function Navbar() {

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
        
        <div> Profile</div>
    </div>
  )
}

export default Navbar;