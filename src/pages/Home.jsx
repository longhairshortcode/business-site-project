import style from "./Home.module.css"
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className={style.container}>
      <div>
      <h1 className={style.title}>Connected Contracting</h1>
      <p className={style.p}>Build, manage, and integrate your contracts with your software tools for smarter management.</p>
      <NavLink to="/create-account" className={style.signUp}>Sign Up</NavLink>
      <NavLink to="/pricing" className={style.plans}>Paid Plans</NavLink>
    </div>
    </div>
  )
}

export default Home
