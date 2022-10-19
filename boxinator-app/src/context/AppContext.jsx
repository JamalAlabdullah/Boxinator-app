import CountryProvider from "./CountryContext"
import PackageProvider from "./PackageContext"
import UserProvider from "./UserContext"
import WeightProvider from "./WeightContext"

// responsible for merging all the context 
const AppContext = ({children}) => {
    
    return (
        
        <UserProvider>
            <PackageProvider>
        <CountryProvider>
            <WeightProvider>
        {children}
        </WeightProvider>
        </CountryProvider>
        </PackageProvider>
        </UserProvider>
       
    )
   

}

export default AppContext