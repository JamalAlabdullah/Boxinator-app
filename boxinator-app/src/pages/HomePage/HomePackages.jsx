import './homepage.css'
import { ntc } from "../../utils/ntc" // Used to convert hex and rgb to a color name
import source from "../../stamp-svgrepo-com.svg";
import React, { useEffect } from 'react';
import { usePackage } from '../../context/PackageContext';
import { fetchPackageById } from '../../api/PackageService';
import keycloak from '../../keycloak';

let userId = "";







const HomePackages = () => {

    userId = keycloak.subject;

    // Axios ------------------------------
    const { packages, setPackage } = usePackage();

    useEffect(() => {
      
        const init = async () => {
            const box = await fetchPackageById(userId);
            setPackage(box);
        };

        init();
        
    }, []);

    if (!packages) return null;

    return (
        <div id="packGrid">

            {packages.shipments && packages.shipments.map(({id, receiver_name, color, weight, country}) => (
                <div key={id}>
                    <ul id="packUl">

                        <li id="packLiImg">
                            <p id="pName">{receiver_name}</p>
                            <img id="stampImg" src={source} alt="Stamp SVG" 
                                style={{
                                    border:"6px solid " + color,
                                    backgroundColor: color, 
                                }}/>
                        </li>

                        <li id="packLi">{weight}</li>
                        <li id="packLi">{ntc.name(color)[1]}</li>
                        <li id="packLi">{country}</li>
                    </ul> 
                </div>
            ))}

        </div>
    )

}

export default  HomePackages   