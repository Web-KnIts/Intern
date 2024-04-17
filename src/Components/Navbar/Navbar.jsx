import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./navbar.css"


function Navbar() {
  const [toggle,setToggle] = useState(true);
  return (
    <div className='Ncode__navbar-container'>
      <div className='Ncode__navabar-logo'>
        Ncode<span>Ai</span>  
      </div>
      <div className='Ncode__navbar-menu '>
        {/* {
         toggle ? <RiCloseLine  size={40} onClick={() => setToggle(false)} />
          : <RiMenu3Line  size={40} onClick={() => setToggle(true)} />
        }
        {
          toggle && 
          <div className='Ncode__navabr-menulink scale-up-center'>
              <button className='Ncode__navabar-menulink-btn'>Find Us</button>
          </div>
        } */}
        <button className='Ncode__navabar-menulink-btn'>Find Us</button>
      </div>
    </div>
  )
}

export default Navbar