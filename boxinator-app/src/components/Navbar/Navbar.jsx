import './Navbar.css'
import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <nav id="navBar">
            <h1 id="navH1">Boxinator</h1>
            <ul id="navUl">
                <li id="liReg"><NavLink to="/register">Register</NavLink></li>
                <li id="liProf"><NavLink to="/profile">Profile</NavLink></li>
                <li id="liHome"><NavLink to="/home">Home</NavLink></li>
            </ul>
        </nav>
    )

}

export default Navbar