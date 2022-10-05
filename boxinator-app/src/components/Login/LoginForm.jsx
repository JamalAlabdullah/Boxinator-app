import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.css";

const LoginForm = () => {
  return (
    <>
      <div className="container login">
        <h1>Login page </h1>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="emailLabel">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="passwordLabel">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button className="loginBtn" variant="primary" type="submit">
            {" "}
            Login
          </Button>
          <br></br>
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
