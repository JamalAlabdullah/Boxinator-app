import axios from "axios";
import { useState, useEffect } from "react";
import { useContext,createContext } from "react";

//Context
const WeightContext = createContext()

export const useWeight = () => {
    return useContext(WeightContext) // {countries, setCountries}
}

const weightController = 'http://localhost:8080/api/v1/weight'

//Provider -> managing state

const WeightProvider = ({children}) => {

    const [weights, setWeights] = useState(null)

  

useEffect(() => {
  
    axios.get(weightController).then((res) => {
        setWeights(res.data)
        console.log(res.data)
    });
}, [setWeights])


    return (
        <WeightContext.Provider value={{weights, setWeights}}>
            { children}

        </WeightContext.Provider>
    )
}

export default WeightProvider