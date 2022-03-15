import React from 'react';
import "./Navbar.css";
import img1 from "./images/ppp.jfif";

function Navbar() {
  return (
    <div className="nav">
      
        <div className="nav_header-right">
          <h1>Edvora</h1>
        </div>
        <div className="nav_header-left">
          <h1>Dhruv Singh</h1>
           <img className="nav_header-avatar" src={img1} alt="" >
             
           </img>
       
            

        </div>
        <div className=""></div>
      
    </div>
  );
}

export default Navbar;