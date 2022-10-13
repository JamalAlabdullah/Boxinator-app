import './homepage.css'
//import { ntc } from "../../utils/ntc" // Used to convert hex and rgb to a color name
import source from "../../stamp-svgrepo-com.svg";
import axios from 'axios'; //Axios
import React from 'react';

const baseURL = "http://localhost:8080/api/v1/shipments"; // Api connection

const HomePackages = () => {

    // Experiment start -------------------------------- 
    //let color = ntc.name("#FF0000")
    //let rgb = color[0];
    //let colorName = color[1];
    //console.log(colorName);
    //console.log(rgb);
    //console.log(color);
    // Experiment end ----------------------------------

    // Axios ------------------------------
    const [packages, setPackage] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPackage(response.data);
        });
    }, []);

    if (!packages) return null;


    let temp = []; //Array used to temporarly store packages packages

    for (let i = 0; i < packages.length; i++) { //Pushes a spesific packages packages to temp[] array
        if(packages[i].appUser === 2) {
            temp.push(packages[i]);
        }
    }

    return (
        <div id="packGrid">

            {temp && temp.map(({id, receiver_name, color, weight, country}) => (
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
                        <li id="packLi">{color}</li>
                        <li id="packLi">{country}</li>
                    </ul> 
                </div>
            ))}

        </div>
    )

}

export default HomePackages