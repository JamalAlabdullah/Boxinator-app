import { useState, useEffect } from "react";
import { useContext,createContext } from "react";
import { fetchPackage } from "../api/PackageService";

//Context
const PackageContext = createContext()

export const usePackage = () => {
    return useContext(PackageContext) // {countries, setCountries}
}


//Provider -> managing state

const PackageProvider = ({children}) => {

    const [packages, setPackage] = useState(null)

    useEffect(() => {
        if(!packages) {
            const init = async () => {
                const packages = await fetchPackage();
                setPackage(packages)
            };
        init();
        }
    }, [packages]);


    return (
        <PackageContext.Provider value={{packages, setPackage}}>
            { children }

        </PackageContext.Provider>
    )
}

export default PackageProvider