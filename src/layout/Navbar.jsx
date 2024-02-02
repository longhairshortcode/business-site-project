// import React, { useState } from 'react';
// import style from "./Navbar.module.css";
// import { NavLink } from "react-router-dom";
// import myLogo from "../assets/my-logo.png";

// function Navbar() {

//   const [showLinks, setShowLinks] = useState(false);

//   const toggleLinks = () => {
//     setShowLinks(!showLinks);
//   };

//   return (
//     <nav className={style.navbarContainer}>
        
//       <div className={style.leftLogo}>
//         <NavLink to="/"><img src={myLogo} alt="company-logo" className={style.logo} /></NavLink>
//       </div>


//       <div className={style.burgerIcon} onClick={toggleLinks}>
//         &#9776; {/* Burger icon (Unicode character) */}
//       </div>


//       <div className={`${style.midLinks} ${showLinks ? style.showLinks : ''}`}>
//         <NavLink to="/integrations">Integrations</NavLink>
//         <NavLink to="/solutions">Solutions</NavLink>
//         <NavLink to="/features">Features</NavLink>
//         <NavLink to="/pricing">Pricing</NavLink>
//       </div>


//       <div className={style.rightLogin}>
//         <NavLink to="/login" className={style.login} >Log In</NavLink>
//         <NavLink to="/create-account" className={style.createButton}>Create Account</NavLink>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;





