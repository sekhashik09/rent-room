import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { json } from 'react-router-dom'

export const AuthContext = createContext()

export const AuthContextProvider =({children})=>{
const [currentUser,setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
)

const updateUser = (data)=>{
    setCurrentUser(data)
}

useEffect(()=>{
    localStorage.setitem("user",json.stringify(currentUser))
},[currentUser])


    return (
        <AuthContext.Provider value={{currentUser,updateUser}}>{children}</AuthContext.Provider>
    )   
}