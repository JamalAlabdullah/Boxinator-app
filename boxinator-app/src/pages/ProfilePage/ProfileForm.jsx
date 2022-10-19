import axios from 'axios'; //Axios
import React, { useState, useEffect } from 'react';
import { fetchUser, fetchUserById } from '../../api/UserService';
import { useUser } from '../../context/UserContext';
import keycloak from '../../keycloak';

const baseURL = "http://localhost:8080/api/v1/account/"; // Api connection
const userId = "cd1bcfe9-099d-4ac2-9dfb-8d5e31e02fe9";

const ProfileForm = () => {

    /*
    const [ updatedDate, setDate  ] = useState('');
    const [ updatedCountry, setCountry ] = useState('');
    const [ updatedPost, setPost  ] = useState('');
    const [ updatedNumb, setNumb  ] = useState('');
    */
    // Axios ------------------------------

    const {user, setUser} = useUser()

    useEffect(() => {

        if (!user) {
            const init = async () => {
                const user = await fetchUserById(userId);
                setUser(user);
            };

            init();
        }

    }, [setUser, user]);

    if (!user) return null;

    const onSubmit = event => {
        event.preventDefault();
        axios.put(baseURL + userId, {
            headers: { Authorization: `Bearer ${keycloak.token}` },
            id: userId, 
            birthday: event.target[1].value, 
            country: event.target[2].value,
            postal_code: event.target[3].value,
            phone_number: event.target[4].value 
        })
        .then(res=>{
            console.log(res);
            console.log(res.data);
            window.location = "/profile" //This line of code will redirect you once the submission is succeed
        })
    }


    return (
        <form id="profForm" onSubmit={onSubmit}>

            <fieldset id="profField">

                <label htmlFor="dateBirth">Date of birth: </label>
                <input id="dateBirth" type="date" 
                    defaultValue={user.account.birthday}
                />

                <label htmlFor="country">Country: </label>
                <input id="country" type="text" name="country"
                    defaultValue={user.account.country} 
                />

                <label htmlFor="postCode">Postal code: </label>
                <input id="postCode" type="number" 
                    defaultValue={user.account.postal_code} 
                />

                <label htmlFor="conNumb">Contact number: </label>
                <input id="conNumb" type="number" 
                    defaultValue={user.account.phone_number}
                />

            </fieldset>
            <button id="btnContinue" type="submit">Save Changes</button>

        </form>
    )
}

export default ProfileForm