import React from 'react';
import axios from 'axios'; //Axios
import { useCountry } from "../../context/CountryContext";
import keycloak from '../../keycloak';

const baseURL = "http://localhost:8080/api/v1/settings/countries";

const CountryMultiplier = () => {

    const { countries } = useCountry();

    if(!countries) return null;

    const onSubmit = event => {
        event.preventDefault();

        console.log(event.target[1].id);
        console.log(event.target[1].value);

        axios.post(baseURL, {
            id: event.target[1].id, 
            multiplier: event.target[1].value
        })
        .then(res=>{
            console.log(res);
            console.log(res.data);
            window.location = "/home" //This line of code will redirect you once the submission is succeed
        })
    };

    return (
        <div id="multiDiv">
            {countries.map((country)  => ( 
                <form id="multiForm" onSubmit={onSubmit} key={country.id}>
                    <fieldset div id="multiField">
                        <label htmlFor={country.id}>{country.id}:</label>
                        <input id={country.id} type="number" defaultValue={country.multiplier}/>
                    </fieldset>
                    <button id="btnContinue" type="submit">Save Changes</button>
                </form>
            ))}
        </div>
    )

}

export default CountryMultiplier