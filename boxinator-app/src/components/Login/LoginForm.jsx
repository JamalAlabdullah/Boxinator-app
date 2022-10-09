import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.css";



import keycloak from "../../keycloak";

const LoginForm = () => {
  return (
    <>
      <div className="container login">
        <h1>Login page </h1>

        <Form>
       
          
          {!keycloak.authenticated && (
             <Button className="loginBtn"
              variant="primary"
               type="submit"
               onClick={() => keycloak.login()}
               >Login
             </Button>
          )}
            {keycloak.authenticated && (
          <button onClick={() => keycloak.logout()}>Logout</button>
        )}
         

         {keycloak.token && (
        <div>
          <h4>Token</h4>
          <pre>{keycloak.token}</pre>
        </div>
      )}


          <Button className="registerBtn" variant="primary" type="submit">
            Register
          </Button>
          <Button className="guestBtn" variant="primary" type="submit">
            Guest
          </Button>
        </Form>
      </div>
    </>
  );
};

export default LoginForm;
