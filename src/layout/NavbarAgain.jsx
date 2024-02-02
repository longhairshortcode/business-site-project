import myLogo from "../assets/my-logo.png"
import style from "./NavbarAgain.module.css"
import { NavLink } from "react-router-dom"

function NavbarAgain() {
  return (
    <nav className={style.container}>
        
        <div className={style['left-logo']}>
            <NavLink to="/"><img src={myLogo} alt="company-logo"></img></NavLink>
        </div>


        <div className={style['middle-links']}>
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


