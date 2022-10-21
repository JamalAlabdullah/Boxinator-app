import keycloak from "../../keycloak";
import axios from 'axios';
import { useState } from "react";
import "./register.css";


const baseURL = "http://localhost:8080/api/v1/account";

const RegisterForm = () => {

userId = keycloak.subject;

  const [dateOfBirth, setDateOfBirth] = useState('')
  const [country, setCountry] = useState([]);
  const [postalCode, setPostCode] = useState('');
  const [phoneNr, setPhoneNr] = useState('');




  const onSubmit = event => {
    event.preventDefault();

    axios.post(baseURL, {
      id: keycloak.tokenParsed.sub,
      birthday: dateOfBirth,
      country: country,
      //name:keycloak.tokenParsed.given_name,
      postal_code: postalCode,
      phone_number: phoneNr,
      // username:keycloak.tokenParsed.family_name,

    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        window.location = "/home"
      })
  }


  return (
    <form id="profForm" onSubmit={onSubmit}>
      <fieldset id="profField">
        {keycloak.tokenParsed && (
          <>
            <label htmlFor="fName">First name: </label>

            <p>{keycloak.tokenParsed.given_name}</p>

            <label htmlFor="lName">Last name: </label>

            <p>{keycloak.tokenParsed.family_name}</p>

            <label htmlFor="email">E-mail: </label>

            <p>{keycloak.tokenParsed.email}</p>

            {/*   <p>token is:{keycloak.token}</p>   */}

          </>

        )}

        <label htmlFor="dateBirth">Date of birth: </label>
        <input id="dateBirth" type="date" placeholder="date og birth..."
          onChange={event => setDateOfBirth(event.target.value)} />

        <label htmlFor="country">Country: </label>
        <input id="country" type="text" placeholder="country..."
          onChange={event => setCountry(event.target.value)} />

        <label htmlFor="postCode">Postal code: </label>
        <input id="postCode" type="number" placeholder="postal code..."
          onChange={event => setPostCode(event.target.value)} />

        <label htmlFor="conNumb">Contact number: </label>
        <input id="conNumb" type="number" placeholder="contact number..."
          onChange={event => setPhoneNr(event.target.value)} />


      </fieldset>

      <button id="btnContinue" type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
