import { useState } from "react"
import PackageModal from "../components/PackageModal/PackageModal";

const HomePage = () => {

const [isOpen, setIsOpen] = useState(false)

    return(
        <div>
            <h1>Home Page</h1>
            <button type="button" class="btn btn-info" onClick={() => setIsOpen(true)}>New Package</button>
            {isOpen && <PackageModal setIsOpen={setIsOpen} />}
        </div>
    )
}
export default HomePage;
