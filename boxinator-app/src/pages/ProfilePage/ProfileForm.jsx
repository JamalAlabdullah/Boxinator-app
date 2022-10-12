import axios from 'axios'; //Axios
import React from 'react';

const baseURL = "http://localhost:8080/api/v1/account"; // Api connection

const ProfileForm = () => {

    // Axios ------------------------------
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setUser(response.data);
        });
    }, []);

    if (!user) return null;

    
    let temp = []; //Array used to temporarly store users packages

    for (let i = 0; i < user.length; i++) { //Pushes a spesific users packages to temp[] array
        if(user[i].user_id === 2) {
            temp.push(user[i]);
        }
    }


    return (
        <form id="profForm">

            <fieldset id="profField">

                <label htmlFor="dateBirth">Date of birth: </label>
                <input id="dateBirth" type="date" defaultValue={temp[0].birthday} />

                <label htmlFor="country">Country: </label>
                <input id="country" type="text" name="country" defaultValue={temp[0].country} />

                <label htmlFor="postCode">Postal code: </label>
                <input id="postCode" type="number" defaultValue={temp[0].postal_code} />

                <label htmlFor="conNumb">Contact number: </label>
                <input id="conNumb" type="number" defaultValue={temp[0].phone_number} />
            </fieldset>
            <button id="btnContinue" type="submit">Save Changes</button>

        </form>
    )
}

export default ProfileForm