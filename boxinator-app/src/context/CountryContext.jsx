import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

//Context


const CountryContext = createContext()

export const useCountry = () => {
    return useContext(CountryContext) // {countries, setCountry}
}


//Provider -> managing state

const CountryProvider = ({children}) => {

    const [countries, setCountry] = useState(null)

    const state = {
        countries,
        setCountry
    }

    return (
        <CountryContext.Provider value={state}>
            { children}

        </CountryContext.Provider>
    )
}

export default CountryProvider