import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

//Context


const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext) // {user, setUser}
}


//Provider -> managing state

const UserProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const state = {
        user,
        setUser

    }

    return (
        <UserContext.Provider value={state}>
            { children}

        </UserContext.Provider>
    )
}

export default UserProvider