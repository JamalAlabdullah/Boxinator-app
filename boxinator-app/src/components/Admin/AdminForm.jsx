import source from "../../stamp-svgrepo-com.svg";
import axios from 'axios'; //Axios
import React, { useState } from 'react';
//import { useForm } from "react-hook-form";

const baseURL = "http://localhost:8080/api/v1";

const AdminForm = () => {

    // HOOKS
    /*
    const [ updatedRecName, setRecName ] = useState('');
    const [ updatedWeight, setWeight ] = useState('');
    const [ updatedColor, setColor ] = useState('');
    const [ updatedCountry, setCountry ] = useState('');
    */
    //const {register, handleSubmit, reset} = useForm();
    const [packages, setPackage] = React.useState(null);
    

    // GET all packages
    React.useEffect(() => {
        axios.get(baseURL + "/shipments").then((response) => {
            setPackage(response.data);
        });
    }, []);

    if (!packages) return null;

    //POST changes made by admin
    const onSubmit = event => {
        event.preventDefault();
        console.log(event.target[1].name);
        console.log("Name: " + event.target[1].value);
        console.log("Weight: " + event.target[2].value);
        console.log("Color: " + event.target[3].value);
        console.log("Country: " + event.target[4].value);

        
        axios.post(baseURL + "/shipments", { 
            id: event.target[0].id, 
            receiver_name: event.target[1].value, 
            weight: event.target[2].value,
            color: event.target[3].value,
            country: event.target[4].value,
            appUser: event.target[1].name
        })
        .then(res=>{
            console.log(res);
            console.log(res.data);
            window.location = "/home" //This line of code will redirect you once the submission is succeed
        })
    };

    return (
        <div id="packGrid">

            {packages && packages.map(({id, receiver_name, color, weight, country, appUser}) => (
            

                <form onSubmit={onSubmit} key={id}>
                    <fieldset id={id}>
                        <ul id="packUl" >

                            <li id="packLiImg">
                                <input type="text" id="pName" name={appUser} defaultValue={receiver_name}
                           
                                />
                                <img id="stampImg" src={source} alt="Stamp SVG" 
                                    style={{
                                        border:"6px solid " + color,
                                        backgroundColor: color, 
                                    }}/>
                            </li>

                            <li>
                                <input type="text" id="packLi" defaultValue={weight}
                       
                                />
                            </li>
                            <li>
                                <input type="text" id="packLi" defaultValue={color} 
                          
                                />
                            </li>
                            <li>
                                <input type="text" id="packLi" defaultValue={country} 
                            
                                />
                            </li>

                            <li>
                                <button id="btnContinue" type="submit">Save Changes</button>
                            </li>
                        </ul> 
                        
                        </fieldset>
                    </form>
             
            ))}

        </div>
    )
}

export default AdminForm