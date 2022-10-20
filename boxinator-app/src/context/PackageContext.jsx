import { useState, useEffect } from "react";
import { useContext,createContext } from "react";
import { fetchPackage} from "../api/PackageService";

//Context
const PackageContext = createContext()

export const usePackage = () => {
    return useContext(PackageContext) 
}

//Provider -> managing state

const PackageProvider = ({children}) => {

    const [packages, setPackage] = useState(null)

  
    useEffect(() => {
        const init = async () => {
            const {packages}  = await fetchPackage();
            console.log("hva er dette", packages)
            setPackage(packages)
      
        };
        init();
    }, []);

    
    return (
        <PackageContext.Provider value={{packages, setPackage}}>
            { children}

        </PackageContext.Provider>
    )
}

export default PackageProvider