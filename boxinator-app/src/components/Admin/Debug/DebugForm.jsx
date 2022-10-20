import React from 'react';
import {useEffect} from 'react';
import source from "./../../../stamp-svgrepo-com.svg";
import { ntc } from "./../../../utils/ntc" // Used to convert hex and rgb to a color name
import { usePackage } from "./../../../context/PackageContext"
import { useWeight } from "./../../../context/WeightContext"
import { useCountry } from "./../../../context/CountryContext"
import axios from 'axios';
import {fetchPackage } from './../../../api/PackageService';


const shipmentURL = "http://localhost:8080/api/v1/"


const DebugForm = () => {

  const { weights } = useWeight();
  const { countries } = useCountry();

       // HOOKS
       const { packages, setPackage } = usePackage();

  
    //PUT
    const onSubmit = event => {
        event.preventDefault();
        axios.put(shipmentURL , {
          receiver_name: event.target[1].value, 
          color: event.target[2].value,
          date: event.target[3].value,
          status: event.target[4].value 
      })
      .then(res=>{
          console.log(res);
          console.log(res.data);
          window.location = "/profile" //This line of code will redirect you once the submission is succeed
      })
  
        
    };

    return (
        <div id="packGrid">
            {packages && packages.map((packages) => (
            <form onSubmit={onSubmit} key={packages.id}>
            <fieldset id={packages.id}>
            <ul id="packUl" >

        <li id="packLiImg">
        <input type="text" id="pName" name={packages.appUser} defaultValue={packages.receiver_name} />
        <img id="stampImg" src={source} alt="Stamp SVG" 
                style={{
                    border:"6px solid " + packages.color,
                    backgroundColor: packages.color, 
             }}/>
                                
    </li>

     <li>
        <input type="text" id="packLi" name={packages.weight }defaultValue={packages.weight} />
         </li>
           <li id="packLiImg">
         <p id="pColor">{ntc.name(packages.color)[1]}</p>
           <input type="color" id="adminColor" defaultValue={packages.color}/>
             </li>
              <li>
            <input type="text" name={packages.country} id="countDrop" defaultValue={packages.country} />
                                   
           </li>
         <select name={packages.status} id="stDrop" defaultValue={packages.status}>
                <option value="CREATED">CREATED</option>
                <option value="RECEIVED">RECEIVED</option>
                <option value="INTRANSIT">INTRANSIT</option>
                <option value="COMPLETED">COMPLETED</option>
                <option value="CANCELLED">CANCELLED</option>
        </select>

            <li>

        <button id="btnContinue" type="submit">Update status</button>
          </li>
          </ul>          
          </fieldset>
          </form>
             
            ))}

        </div>
    )
}

export default DebugForm