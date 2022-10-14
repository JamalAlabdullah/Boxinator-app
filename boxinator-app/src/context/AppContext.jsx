import CountryProvider from "./CountryContext"
import UserProvider from "./UserContext"

// responsible for merging all the context 
const AppContext = ({children}) => {
    
    return (
        <UserProvider>
            <CountryProvider>
        {children}
        </CountryProvider>
        </UserProvider>
    )
   

}

export default AppContext