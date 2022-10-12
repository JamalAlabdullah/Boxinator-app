import './homepage.css'
//import { ntc } from "../../utils/ntc" // Used to convert hex and rgb to a color name
import source from "../../stamp-svgrepo-com.svg";
import axios from 'axios'; //Axios
import React from 'react';

const baseURL = "http://localhost:8080/api/v1/account"; // Api connection

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
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setUser(response.data);
        });
    }, []);

    if (!user) return null;


    let temp = []; //Array used to temporarly store users packages

    for (let i = 0; i < user.length; i++) { //Pushes a spesific users packages to temp[] array
        if(user[i].user_id === 2) {
            temp.push(user[i]);
        }
    }

    return (
        <div id="packGrid">

            {temp && temp.map(({user_id, country, postal_code}) => (
                <div key={user_id}>
                    <ul id="packUl">

                        <li id="packLiImg">
                            <p id="pName">{country}</p>
                            <img id="stampImg" src={source} alt="Stamp SVG" 
                                style={{
                                    border:"6px solid yellow",
                                    backgroundColor: "yellow", 
                                }}/>
                        </li>

                        <li id="packLi">{postal_code}</li>
                    </ul> 
                </div>
            ))}

        </div>
    )

}

export default HomePackages