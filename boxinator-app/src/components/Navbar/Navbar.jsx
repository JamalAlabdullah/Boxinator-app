import './Navbar.css'
import { NavLink, Link } from "react-router-dom";

import keycloak from '../../keycloak';

const Navbar = () => {



    return (
        <nav id="navBar">
          
            <img className= "logoImage" src='./images/logo2.png' alt='box_image'/>
            <h3 id="navH1" >Boxinator</h3>
            <ul id="navUl" class="d-flex ms-auto order-5">
               
               

                {keycloak.authenticated && (
                    <>
                    
                    <li id="liProf"><NavLink to="/profile">Profile</NavLink></li>
                    <li id="liHome"><NavLink to="/home">Home</NavLink></li>
                    <li id="liLogout"><NavLink>
                    <button id="logoutBtn" onClick={() => keycloak.logout() && (window.location = "/")}>Logout</button></NavLink></li>
                   
                    </>
                )}  

                

            </ul>

            
        </nav>
    )

}

export default Navbar