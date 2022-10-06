import { ntc } from "../../utils/ntc" // Used to convert hex and rgb to a color name
import source from "../../stamp-svgrepo-com.svg"

const ProfileForm = () => {

    // Experiment start -------------------------------- 
    let color = ntc.name("#FFAAEE");
    let rgb = color[0];
    let colorName = color[1];
    console.log(colorName);
    // Experiment end ----------------------------------

    return (
        <form id="profForm">
            <img id="stampImg" src={source} alt="Stamp SVG" 
                style={{
                    border:"6px solid" + rgb,
                    backgroundColor: rgb,
                    
                }}/>
            <fieldset id="profField">

                <label htmlFor="dateBirth">Date of birth: </label>
                <input id="dateBirth" type="date" placeholder="date og birth..." />

                <label htmlFor="country">Country: </label>
                <input id="country" type="text" placeholder="country..." />

                <label htmlFor="postCode">Postal code: </label>
                <input id="postCode" type="number" placeholder="postal code..." />

                <label htmlFor="conNumb">Contact number: </label>
                <input id="conNumb" type="number" placeholder="contact number..." />
            </fieldset>
            <button id="btnContinue" type="submit">Save Changes</button>

        </form>
    )
}

export default ProfileForm