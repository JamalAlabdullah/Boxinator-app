import './navbar.css'
import { NavLink } from "react-router-dom";

import keycloak from '../../keycloak';

const Navbar = () => {

    return (
        <nav id="navBar">
            <h1 id="navH1">Boxinator</h1>
            <ul id="navUl">
               
               

                {keycloak.authenticated && (
                    <>
                    
                    <li id="liProf"><NavLink to="/profile">Profile</NavLink></li>
                    <li id="liHome"><NavLink to="/home">Home</NavLink></li>
                    <li id="liLogout"><NavLink><button id="logoutBtn" onClick={() => keycloak.logout()}>Logout</button></NavLink></li>
                   
                    </>
                )}  

            </ul>

            
        </nav>
    )

}

export default Navbar