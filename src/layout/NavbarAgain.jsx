import myLogo from "../assets/my-logo.png"
import style from "./NavbarAgain.module.css"
import { NavLink } from "react-router-dom"
import { HiMenu } from "react-icons/hi";
import { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";

function NavbarAgain() {

const [showLinks, setShowLinks] = useState(false);

const toggleLinks = () => {
  setShowLinks(!showLinks);
}


  return (
    <nav className={style.container}>
        
        <div className={style['left-logo']}>
            <NavLink to="/"><img src={myLogo} alt="company-logo"></img></NavLink>
        </div>

      <div className={`${style.burgerIcon} ${showLinks ? style.hide : ''}`} onClick={toggleLinks}>
        <HiMenu />
      </div>
      
      <div className={`${style.closeIcon} ${showLinks ? '' : style.hide}`} onClick={toggleLinks}>
        <AiOutlineClose />
      </div>

        <div className={`${style['middle-links']} ${showLinks ? style['showLinks'] : ""}`}>
          <NavLink to="/integrations">Integrations</NavLink>  
          <NavLink to="/solutions">Solutions</NavLink>  
          <NavLink to="/features">Features</NavLink>  
          <NavLink to="/pricing">Pricing</NavLink>  
        </div>

        <div className={style['right-links']}>
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/create-account" className={style.createButton}>Create Account</NavLink>
        </div>

        </nav>
  )
}

export default NavbarAgain


