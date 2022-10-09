import packages from './packages.json'
import './homepage.css'
//import { ntc } from "../../utils/ntc" // Used to convert hex and rgb to a color name
import source from "../../stamp-svgrepo-com.svg";

const HomePackages = () => {

    // Experiment start -------------------------------- 
    //let color = ntc.name("#FF0000")
    //let rgb = color[0];
    //let colorName = color[1];
    //console.log(colorName);
    //console.log(rgb);
    //console.log(color);
    // Experiment end ----------------------------------

    return (
        <div id="packGrid">

            

            {packages && packages.map(({id, color, weight, first_name, last_name, destination}) => (
                <div key={id}>
                    <ul id="packUl">
                        
                        <li id="packLiImg">
                            <p id="pName">{first_name} {last_name}</p>
                            <img id="stampImg" src={source} alt="Stamp SVG" 
                            style={{
                                border:"6px solid" + color,
                                backgroundColor: color, 
                                width:50,
                                height:50 
                            }}/>
                        </li>

                        <li id="packLi">{color}</li>
                        <li id="packLi">{weight} KG</li>
                        <li id="packLi">{destination}</li>
                    </ul> 
                </div>
            ))}
        </div>
    )

}

export default HomePackages