import DebugForm from "../Debug/DebugForm"
import React, { useEffect, useState } from 'react';
import source from "./../../../stamp-svgrepo-com.svg";
import { ntc } from "./../../../utils/ntc" // Used to convert hex and rgb to a color name
import { usePackage } from "./../../../context/PackageContext"
import axios from 'axios';
import { fetchPackage, fetchPackageById } from '../../../api/PackageService';
import keycloak from '../../../keycloak';
import DebugModal from "./DebugModal";

const shipmentURL = "http://localhost:8080/api/v1/shipments/"
const shipmentId = "";
let userId = ""


const DebugPage = () => {

    const [isOpen, setIsOpen] = useState(false)
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






    return (
        <div id="packGrid">
          {packages.shipments && packages.shipments.map(({id, receiver_name, color, weight, country, appUser, status, date, totalSum}) => (
            <div key={id}>
            <ul id="packUl" >
            <li id="packLiImg">
            <p id="pName" name={appUser}>{receiver_name}</p>
        <img id="stampImg" src={source} alt="Stamp SVG" 
                style={{
                    border:"6px solid " + color,
                    backgroundColor: color, 
             }}/>                     
    </li>
    <li id="packLi">{weight}</li>
    <li id="packLi">{color}</li>
    <li id="packLi">{country}</li>
    <li id="packLi">{date} 20.10.2022</li>
    <li id="packLi">{status}</li>
    <li id="packLi">{totalSum}</li>

    <button onClick={() => setIsOpen(true)}>Update status</button>
    </ul> 
    {isOpen && <DebugModal setIsOpen={setIsOpen} />}
    

            </div>
          ))}
         
            </div>
    )
}

export default DebugPage