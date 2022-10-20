import { useState, useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import {fetchUser} from "../api/UserService"

//Context

const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext) // {user, setUser}
}


//Provider -> managing state

const UserProvider = ({children}) => {

    const [user, setUser] = useState(null)
   
    
    useEffect(() => {
        const init = async () => {
            const { user } = await fetchUser();
            setUser(user)
      
        };
        init();
    }, []);
  

    return (
        <UserContext.Provider value={{user, setUser}}>
            { children}

        </UserContext.Provider>
    )
}

export default UserProvider