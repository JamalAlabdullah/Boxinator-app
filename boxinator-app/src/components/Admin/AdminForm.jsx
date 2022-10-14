import source from "../../stamp-svgrepo-com.svg";
import axios from 'axios'; //Axios
import React from 'react';

const baseURL = "http://localhost:8080/api/v1";

const AdminForm = () => {

    const [packages, setPackage] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL + "/shipments").then((response) => {
            setPackage(response.data);
        });
    }, []);

    if (!packages) return null;

    return (
        <div id="packGrid">

            {packages && packages.map(({id, receiver_name, color, weight, country}) => (
                <div key={id}>
                    <ul id="packUl">

                        <li id="packLiImg">
                            <input type="text" id="pName" defaultValue={receiver_name}/>
                            <img id="stampImg" src={source} alt="Stamp SVG" 
                                style={{
                                    border:"6px solid " + color,
                                    backgroundColor: color, 
                                }}/>
                        </li>

                        <li>
                            <input type="text" id="packLi" defaultValue={weight} />
                        </li>
                        <li>
                            <input type="text" id="packLi" defaultValue={color} />
                        </li>
                        <li>
                            <input type="text" id="packLi" defaultValue={country} />
                        </li>
                    </ul> 
                </div>
            ))}

        </div>
    )
}

export default AdminForm