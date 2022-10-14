import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

//Context


const CountryContext = createContext()

export const useCountry = () => {
    return useContext(CountryContext) // {countries, setCountries}
}


//Provider -> managing state

const CountryProvider = ({children}) => {

    const [countries, setCountries] = useState([])

    const state = {
        countries,
        setCountries

    }

    return (
        <CountryContext.Provider value={state}>
            { children}

        </CountryContext.Provider>
    )
}

export default CountryProvider