import {Routes, Route} from "react-router-dom"
//Layout
// import Navbar from "./layout/Navbar"
import NavbarAgain from "./layout/NavbarAgain"
//Pages
import Home from "./pages/Home"
import CreateAccount from "./pages/CreateAccount"
import Features from "./pages/Features"
import Integrations from "./pages/Integrations"
import Login from "./pages/Login"
import Pricing from "./pages/Pricing"
import Solutions from "./pages/Solutions"


const App = () => {
  return (
    <>
    <div className="time"></div>
    <section>
    {/* <Navbar/> */}
    <NavbarAgain/>
    <Routes>
      <Route path={"/"} element={<Home/>}></Route>
      <Route path={"/create-account"} element={<CreateAccount/>}></Route>
      <Route path={"/features"} element={<Features/>}>Features</Route>
      <Route path={"/integrations"} element={<Integrations/>}></Route>
      <Route path={"/login"} element={<Login/>}></Route>
      <Route path={"/pricing"} element={<Pricing/>}></Route>
      <Route path={"/solutions"} element={<Solutions/>}></Route>
    </Routes>
    </section>
    </>
    
    
  )
}

export default App
