import { useState, useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import axios from "axios"

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

    const getUsers = () => {
        axios.get(accountController)
    .then((res) => 
    {
        setUser(res.data)
        console.log(res.data)
    })
    .catch((err) => {
    console.log(err)
    })
    
    
    }
    
    const getUserById = (id) => {
        return user.find((user) => user.id === id)
    
    }
    
    
    
    useEffect(() => {
        getUsers();
      }, []);

  

    return (
        <UserContext.Provider value={{state, getUserById, getUsers}}>
            { children}

        </UserContext.Provider>
    )
}

export default UserProvider