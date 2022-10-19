import source from "../../stamp-svgrepo-com.svg";
import axios from 'axios'; //Axios
import React, { useEffect } from 'react';
import { ntc } from "../../utils/ntc" // Used to convert hex and rgb to a color name
import { usePackage } from "../../context/PackageContext";
import { useWeight } from "../../context/WeightContext";
import {useCountry} from "../../context/CountryContext";
import { fetchPackage } from "../../api/PackageService";

const baseURL = "http://localhost:8080/api/v1";

const AdminForm = () => {

    // HOOKS
    const { packages, setPackage } = usePackage();
    const { weights } = useWeight();
    const { countries } = useCountry();

    // GET all packages
    useEffect(() => {
        if (!packages || !weights || !countries) {
            const init = async () => {
                const packages = await fetchPackage();
                setPackage(packages);
                //console.log(packages.shipments[0].appUser);
            };

            init();
        }
    }, [setPackage, packages, weights, countries]);

    if (!packages || !weights || !countries) return null;

    //POST changes made by admin
    const onSubmit = event => {
        event.preventDefault();
        
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

            {packages.shipments.map((packages) => (
            
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
                                <select name="countriesDrop" id="countDrop" defaultValue={packages.weight}>
                                    {weights.map((weight)  => ( 
                                        <option key={weight.id}>{weight.id}</option>
                                    ))}
                                </select>
                            </li>
                            <li id="packLiImg">
                                <p id="pColor">{ntc.name(packages.color)[1]}</p>
                                <input type="color" id="adminColor" defaultValue={packages.color}/>
                            </li>
                            <li>
                                <select name="countriesDrop" id="countDrop" defaultValue={packages.country}>
                                    {countries.map((country)  => ( 
                                        <option key={country.id}>{country.id}</option>
                                    ))}
                                </select>
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