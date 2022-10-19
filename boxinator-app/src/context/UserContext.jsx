import { useState, useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import axios from "axios"
import {fetchUser} from "../api/UserService"

//Context

const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext) // {user, setUser}
}

const accountController = 'http://localhost:8080/api/v1/account'
//const shipmentsController = 'http://localhost:8080/api/v1/shipments'

//Provider -> managing state

const UserProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const state = {
        user,
        setUser

    }

    
    
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