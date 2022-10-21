import React, { useEffect } from 'react';
import source from "./../../../stamp-svgrepo-com.svg";
import { ntc } from "./../../../utils/ntc" // Used to convert hex and rgb to a color name
import { usePackage } from "./../../../context/PackageContext"
import axios from 'axios';
import { fetchPackage, fetchPackageById } from '../../../api/PackageService';
import keycloak from '../../../keycloak';

const shipmentURL = "http://localhost:8080/api/v1/shipments/"
const shipmentId = "";
let userId = ""

const DebugForm = () => {

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

    const handleUpdate = async (shipments) => {
      packages.status = shipments.status
      await axios.put(shipmentURL + packages.id)
      const packageClone = [...packages]
      const index = packageClone.indexOf(shipments)
      packageClone[index] = {...shipments}
      setPackage(packageClone)
    }

  
    //PUT
    const onSubmit = event => {
        event.preventDefault();

        axios.put(shipmentURL + shipmentId, {
          headers: { Authorization: `Bearer ${keycloak.token}` },
          id: shipmentId,
          receiver_name: event.target[1].value,
          weight: event.target[2].value,
          color: event.target[3].value,
          status: event.target[5].value,
          country: event.target[6].value,
          appUser: userId,
          totalSum: 200
      })
      .then(res=>{
          console.log(res);
          console.log(res.data);
          window.location = "/profile" //This line of code will redirect you once the submission is succeed
      })
  
        
    };


    return (
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
         <select name="statusDrop" id="stDrop" defaultValue={status}  onClick={() => handleUpdate(shipmentId)}>
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
    )
}

export default DebugForm