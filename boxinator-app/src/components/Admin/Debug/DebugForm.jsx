import React from 'react';
import source from "./../../../stamp-svgrepo-com.svg";
import { ntc } from "./../../../utils/ntc" // Used to convert hex and rgb to a color name
import { usePackage } from "./../../../context/PackageContext"
import axios from 'axios';


const shipmentURL = "http://localhost:8080/api/v1/shipments"
const shipmentId = 1;

const DebugForm = () => {

    const {packages} = usePackage()

  
    //PUT
    const onSubmit = event => {
        event.preventDefault();
        axios.put(shipmentURL + "/" + shipmentId, {
          id: shipmentId, 
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