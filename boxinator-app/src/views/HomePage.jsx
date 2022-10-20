import { useState } from "react"
import HomePackages from "../pages/HomePage/HomePackages";
import PackageModal from "../components/Modal/PackageModal";

import AdminForm from "../components/Admin/AdminForm";

//import KeycloakRouter from '../routes/KeycloakRoute';





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

            <h2>Admin Test: Remove Later</h2>

                   
        
        </div>
    )
}
export default HomePage;
