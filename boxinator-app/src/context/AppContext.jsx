import CountryProvider from "./CountryContext"
import UserProvider from "./UserContext"
import WeightProvider from "./WeightContext"

// responsible for merging all the context 
const AppContext = ({children}) => {
    
    return (
        
        <CountryProvider>
            <WeightProvider>
        {children}
        </WeightProvider>
        </CountryProvider>
       
    )
   

}

export default AppContext