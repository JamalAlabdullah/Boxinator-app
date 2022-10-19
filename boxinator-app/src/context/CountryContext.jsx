import { useState, useEffect } from "react";
import { useContext,createContext } from "react";
import { fetchCountry } from "../api/CountryService";


//Context
const CountryContext = createContext()

export const useCountry = () => {
    return useContext(CountryContext) // {countries, setCountries}
}

//Provider -> managing state

const CountryProvider = ({children}) => {


    const [countries, setCountries] = useState(null)

    const state = {
        countries,
        setCountries

    }

useEffect(() => {
    const init = async () => {
        const { countries } = await fetchCountry();
        setCountries(countries)
  
    };
    init();
}, []);


    return (
        <CountryContext.Provider value={{countries, setCountries}}>
            { children}

        </CountryContext.Provider>
    )
}

export default CountryProvider