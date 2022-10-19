import axios from 'axios'; //Axios
import React from 'react';
import source from "./../../../stamp-svgrepo-com.svg";
import { ntc } from "./../../../utils/ntc" // Used to convert hex and rgb to a color name
import { usePackage } from "./../../../context/PackageContext"
import {useCountry} from "./../../../context/CountryContext";

const baseURL = "http://localhost:8080/api/v1";

const DebugForm = () => {

    const {packages, setPackage} = usePackage()
    const {countries, setCountries} = useCountry()
  

    // HOOKS
  

    // GET all packages
    React.useEffect(() => {
        axios.get(baseURL + "/shipments").then((response) => {
            setPackage(response.data);
        });
        axios.get(baseURL + "/settings/countries").then((response) => {
            setCountries(response.data);
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
        console.log("Status: " + event.target[5].value);

        
        axios.post(baseURL + "/shipments", { 
            id: event.target[0].id, 
            receiver_name: event.target[1].value, 
            weight: event.target[2].value,
            color: event.target[3].value,
            country: event.target[4].value,
            appUser: event.target[1].name,
            status: event.target[0].status
        })
        .then(res=>{
            console.log(res);
            console.log(res.data);
            window.location = "/home" //This line of code will redirect you once the submission is succeed
        })
    };

    return (
        <div id="packGrid">
            {packages && packages.map(({id, receiver_name, color, weight, country, appUser, status}) => (
            <form onSubmit={onSubmit} key={id}>
            <fieldset id={id}>
            <ul id="packUl" >

        <li id="packLiImg">
        <input type="text" id="pName" name={appUser} defaultValue={receiver_name} />
        <img id="stampImg" src={source} alt="Stamp SVG" 
                style={{
                    border:"6px solid " + color,
                    backgroundColor: color, 
             }}/>
                                
    </li>

     <li>
        <input type="text" id="packLi" defaultValue={weight} />
         </li>
           <li id="packLiImg">
         <p id="pColor">{ntc.name(color)[1]}</p>
           <input type="color" id="adminColor" defaultValue={color}/>
             </li>
              <li>
            <input type="text" name={country} id="countDrop" defaultValue={country} />
                                   
           </li>
         <select name="statusDrop" id="stDrop" defaultValue={status}>
                <option value="CREATED">CREATED</option>
                <option value="RECEIVED">RECEIVED</option>
                <option value="INTRANSIT">INTRANSIT</option>
                <option value="COMPLETED">COMPLETED</option>
                <option value="CANCELLED">CANCELLED</option>
        </select>

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

export default DebugForm