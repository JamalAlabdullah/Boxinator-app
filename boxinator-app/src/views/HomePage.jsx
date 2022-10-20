import { useState } from "react"
import HomePackages from "../pages/HomePage/HomePackages";
import PackageModal from "../components/Modal/PackageModal";

import AdminForm from "../components/Admin/AdminForm";
import keycloak from "../keycloak";

const HomePage = () => {

console.log(keycloak.idTokenParsed.roles);

const [isOpen, setIsOpen] = useState(false)

    return(
        <div id="homeBody">
            <h1 id="homeH1">Your Packages</h1>
            <div id="center">
                <button id="btnHome" type="button" className="btn btn-info" onClick={() => setIsOpen(true)}>New Package</button>
            </div>
            {isOpen && <PackageModal setIsOpen={setIsOpen} />}

            {keycloak.idTokenParsed.roles[1] === "user" &&
                <HomePackages />
            }
            
            {keycloak.idTokenParsed.roles[0] === "admin" &&
                <>
                    <h2>All Packages</h2>
                    <AdminForm />
                </>
            }
              
        
        </div>
    )
}
export default HomePage;
