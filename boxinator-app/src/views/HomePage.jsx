import { useState } from "react"
import PackageModal from "../components/PackageModal/PackageModal";
import HomePackages from "../components/Homepage/HomePackages";

const HomePage = () => {

const [isOpen, setIsOpen] = useState(false)

    return(
        <div id="homeBody">
            <h1 id="homeH1">Home Page</h1>
            <button id="btnHome" type="button" class="btn btn-info" onClick={() => setIsOpen(true)}>New Package</button>
            {isOpen && <PackageModal setIsOpen={setIsOpen} />}

            <HomePackages />
        
        </div>
    )
}
export default HomePage;
