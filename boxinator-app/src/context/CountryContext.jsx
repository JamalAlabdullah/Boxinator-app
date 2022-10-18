import axios from "axios";
import { useState, useEffect } from "react";
import { useContext,createContext } from "react";


//Context
const CountryContext = createContext()

export const useCountry = () => {
    return useContext(CountryContext) // {countries, setCountries}
}

const conuntryController = 'http://localhost:8080/api/v1/settings/countries'

//Provider -> managing state

const CountryProvider = ({children}) => {

    const [countries, setCountries] = useState(null)

    const state = {
        countries,
        setCountries

    }

useEffect(() => {
    axios.get(conuntryController).then((res) => {
        setCountries(res.data)
        console.log(res.data)
    });
}, [setCountries])



    return (
        <CountryContext.Provider value={{countries, setCountries}}>
            { children}

        </CountryContext.Provider>
    )
}

export default CountryProvider