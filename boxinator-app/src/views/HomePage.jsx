import { useState } from "react"
import HomePackages from "../components/Homepage/HomePackages";
import PackageModal from "../components/Modal/PackageModal";

const HomePage = () => {

const [isOpen, setIsOpen] = useState(false)

    return(
        <div id="homeBody">
            <h1 id="homeH1">Home Page</h1>
            <div id="center">
                <button id="btnHome" type="button" className="btn btn-info" onClick={() => setIsOpen(true)}>New Package</button>
            </div>
            {isOpen && <PackageModal setIsOpen={setIsOpen} />}

            <HomePackages />
        
        </div>
    )
}
export default HomePage;
