import './Navbar.css'
import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <nav>
            <h1>Boxinator</h1>
            <ul id="navUl">
                <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
            </ul>
        </nav>
    )

}

export default Navbar