

import React, { useEffect, useState } from 'react';
import source from "./../../../stamp-svgrepo-com.svg";
import { usePackage } from "./../../../context/PackageContext"
import axios from 'axios';
import { fetchPackage } from '../../../api/PackageService';
import keycloak from '../../../keycloak';
import { NavLink } from "react-router-dom";
import {Row} from 'react-bootstrap';


const shipmentURL = "http://localhost:8080/api/v1/shipments/status/"

let userId = ""



const DebugPage = () => {

    const {packages, setPackage} = usePackage()

    userId = keycloak.subject;


    useEffect(() => {
      
        const init = async () => {
            const packages = await fetchPackage();
            setPackage(packages);
        };
  
        init();
        
    }, []);
  
    if (!packages) return null;

  
    //PUT
    const onSubmit = event => {
        event.preventDefault();
        console.log(event.target[0].id)
        console.log(event.target[5].value)

        axios.put(shipmentURL + event.target[0].id , {
         headers: { Authorization: `Bearer ${keycloak.token}` },
         id: event.target[0].id,
          status: event.target[5].value,
      })
      .then(res=>{
          console.log(res);
          console.log(res.data);
          //window.location = "/profile" //This line of code will redirect you once the submission is succeed
      })  
    };

    return (
<div><h1>View all packages</h1>
<div  id="packGrid"> <li id="liProf"><NavLink to="/debug/completed">COMPLETED</NavLink></li>
<li id="liProf"><NavLink to="/debug/cancelled">CANCELLED</NavLink></li> 
<li id="liProf"><NavLink to="/debug/cancelled">CANCELLED</NavLink></li>
</div>

            <div id="packGrid">
                
              {packages.shipments && packages.shipments.map(({id, receiver_name, color, weight, country, appUser, status, date}) => (
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
           
               <input type="color" id="adminColor" name={color} defaultValue={color}/>
                 </li>
    
    
    
                  <li>
                <input type="text" name={country} id="countDrop" defaultValue={country} />
                                       
               </li>
             <select name="statusDrop" id="stDrop" defaultValue={status} >
                    <option value="CREATED">CREATED</option>
                    <option value="RECEIVED">RECEIVED</option>
                    <option value="INTRANSIT">INTRANSIT</option>
                    <option value="COMPLETED">COMPLETED</option>
                    <option value="CANCELLED">CANCELLED</option>
            </select>
    
                <li>
    
            <button
            
         
            id="btnContinue" type="submit">Update status</button>
              </li>
              </ul>          
              </fieldset>
              </form>
                 
                ))}
    
            </div>
            </div>
        )
    }
    

export default DebugPage