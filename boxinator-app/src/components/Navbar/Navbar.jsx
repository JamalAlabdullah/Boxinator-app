import './Navbar.css'
import { NavLink } from "react-router-dom";

import keycloak from '../../keycloak';

const Navbar = () => {

    return (
        <nav id="navBar">
            <h1 id="navH1">Boxinator</h1>
            <ul id="navUl">
               
               

                {keycloak.authenticated && (
                    <>
                     <li id="liReg"><NavLink to="/register">Register</NavLink></li>
                     <li id="liProf"><NavLink to="/profile">Profile</NavLink></li>
                    <li id="liHome"><NavLink to="/home">Home</NavLink></li>
                    </>
                )}  
            </ul>

            {keycloak.authenticated && (
                     <ul>
                     <li>
                       <button onClick={() => keycloak.logout()}>Logout</button>
                     </li>
                   </ul>
                )}
        </nav>
    )

}

export default Navbar