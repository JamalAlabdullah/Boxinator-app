import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import "./login.css";

import keycloak from "../../keycloak";

const LoginForm = () => {
  const handelregisterbtn = () => {
    window.location.assign("/register");
  };

  return (
    <>
      <CardGroup className="groubcard">
        <Card id="allCard">
          <Card.Body>
            <Card.Text>
              Have you already registered? Go ahead and login.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            {!keycloak.authenticated && (
              <Button
              className="Btn"
               
                onClick={() => keycloak.login()}
              >
                Login
              </Button>
            )}
            {keycloak.authenticated && (
              <button onClick={() => keycloak.logout()}>Logout</button>
            )}
          </Card.Footer>
        </Card>
        <Card id="allCard">
          <Card.Body>
            <Card.Text>
              Do you want to add a package without registering? Use the Guest
              button.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button className="Btn">
              Guest
            </Button>
          </Card.Footer>
        </Card>
        <Card id="allCard">
          <Card.Body>
            <Card.Text>
              If you have not registered before, then click on register button
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button className="Btn" onClick={handelregisterbtn}>
              Register
            </Button>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
};

export default LoginForm;

/*

         {keycloak.token && (
        <div>
          <h4>Token</h4>
          <pre>{keycloak.token}</pre>
        </div>
      )}
*/
