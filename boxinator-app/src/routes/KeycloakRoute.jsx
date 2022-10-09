import keycloak from "../keycloak";
import { Navigate } from "react-router-dom";



function KeycloakRoute({ children, role, redirectTo = "/login" }) {

    if (!keycloak.authenticated) {
      return <Navigate replace to={redirectTo} />;
    }
  
    if (keycloak.hasRealmRole(role)) {
      return <>{children}</>;
    }
  
    return <Navigate replace to={redirectTo} />;
  }
  
  export default KeycloakRoute;



