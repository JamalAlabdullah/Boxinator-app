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
        if (!packages) {
            const init = async () => {
                const packages = await fetchPackageById(userId);
                setPackage(packages);
            };

            init();
        }
    }, [setPackage, packages]);

    if (!packages) return null;

    /*let temp = []; //Array used to temporarly store packages packages

    for (let i = 0; i < packages.shipments.length; i++) { //Pushes a spesific packages packages to temp[] array
        if(packages.shipments[i].appUser === userId) {
            temp.push(packages.shipments[i]);
        }
    }*/

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

export default HomePackages