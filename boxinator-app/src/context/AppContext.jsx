import UserProvider from "./UserContext"

// responsible for merging all the context 
const AppContext = ({children}) => {
    
    return (
        <UserProvider>
        {children}
        </UserProvider>
    )
   

}

export default AppContext