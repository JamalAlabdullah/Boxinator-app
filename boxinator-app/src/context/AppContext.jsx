import CountryProvider from "./CountryContext"

// responsible for merging all the context 
const AppContext = ({children}) => {
    
    return (
        <CountryProvider>
        {children}
        </CountryProvider>
    )
   

}

export default AppContext