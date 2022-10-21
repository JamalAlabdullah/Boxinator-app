import axios from "axios";
import { useState, useEffect } from "react";
import { useContext,createContext } from "react";
import { fetchWeight } from "../api/WeightService";

//Context
const WeightContext = createContext()

export const useWeight = () => {
    return useContext(WeightContext) // {countries, setCountries}
}


//Provider -> managing state

const WeightProvider = ({children}) => {

    const [weights, setWeights] = useState(null)

  

    useEffect(() => {
        const init = async () => {
            const { weights } = await fetchWeight();
            setWeights(weights)
      
        };
        init();
    }, []);


    return (
        <WeightContext.Provider value={{weights, setWeights}}>
            { children}

        </WeightContext.Provider>
    )
}

export default WeightProvider