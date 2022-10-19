/*
import keycloak from "../keycloak";
import { Navigate } from "react-router-dom";



function KeycloakRoute({ children, role, redirectTo = "/" }) {

    if (!keycloak.authenticated) {
      return <Navigate replace to={redirectTo} />;
    }
  
    if (keycloak.hasRealmRole(role)) {
      return <>{children}</>;
    }
  
    return <Navigate replace to={redirectTo} />;
  }
  
  export default KeycloakRoute;


*/

/*
import { Navigate } from "react-router-dom";
import keycloak from "../keycloak"



const KeycloakRoute = Component => props => {
  console.log("logenin");

    const isLoggedIn = keycloak.isLoggedIn;

    if (isLoggedIn) {
      console.log("logenin");

      window.location = "/home"
    } else {
     
    }

}

export default KeycloakRoute;

*/