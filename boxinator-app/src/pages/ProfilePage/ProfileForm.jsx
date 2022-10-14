import axios from 'axios'; //Axios
import React, { useState, useEffect } from 'react';
import { useUser } from '../../context/UserContext';

const baseURL = "http://localhost:8080/api/v1/account"; // Api connection

const ProfileForm = () => {

    const [ updatedDate, setDate  ] = useState('');
    const [ updatedCountry, setCountry ] = useState('');
    const [ updatedPost, setPost  ] = useState('');
    const [ updatedNumb, setNumb  ] = useState('');

    // Axios ------------------------------

    const {user, setUser} = useUser()

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setUser(response.data);
        });
    }, [setUser]);

    if (!user) return null;
    
    //Array used to temporarly store users packages
    let temp = [];

    for (let i = 0; i < user.length; i++) { //Pushes a specific users packages to temp[] array
        if(user[i].id === 2) {
            temp.push(user[i]);
        }
    }
    //console.log(user[0].birthday);

    // Makes sure values isn't lost if not changed 
    if(updatedDate === "") {
        setDate(temp[0].birthday);
    }
    if(updatedCountry === "") {
        setCountry(temp[0].country);
    }
    if(updatedPost === "") {
        setPost(temp[0].postal_code);
    }
    if(updatedNumb === "") {
        setNumb(temp[0].phone_number);
    }

    const onSubmit = event => {
        event.preventDefault();
        
        axios.post(baseURL, { 
            id: "2", 
            birthday: updatedDate, 
            country: updatedCountry,
            postal_code: updatedPost,
            phone_number: updatedNumb 
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
                    defaultValue={temp[0].birthday}
                    onChange={event => setDate(event.target.value)}
                />

                <label htmlFor="country">Country: </label>
                <input id="country" type="text" name="country"
                    defaultValue={temp[0].country} 
                    onChange={event => setCountry(event.target.value)}
                />

                <label htmlFor="postCode">Postal code: </label>
                <input id="postCode" type="number" 
                    defaultValue={temp[0].postal_code}
                    onChange={event => setPost(event.target.value)} 
                />

                <label htmlFor="conNumb">Contact number: </label>
                <input id="conNumb" type="number" 
                    defaultValue={temp[0].phone_number}
                    onChange={event => setNumb(event.target.value)} 
                />

            </fieldset>
            <button id="btnContinue" type="submit">Save Changes</button>

        </form>
    )
}

export default ProfileForm