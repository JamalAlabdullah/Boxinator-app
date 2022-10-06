import './Navbar.css'
import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <nav id="navBar">
            <h1 id="navH1">Boxinator</h1>
            <ul id="navUl">
                <li id="navLi"><NavLink to="/register">Register</NavLink></li>
                <li id="navLi"><NavLink to="/profile">Profile</NavLink></li>
                <li id="navLi"><NavLink to="/home">Home</NavLink></li>
            </ul>
        </nav>
    )

}

export default Navbar