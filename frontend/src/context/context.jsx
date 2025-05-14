import { createContext, useContext, useState } from 'react';
import React from 'react'

export const AppContext = createContext();


const Context = ({children}) => {
  const [popshow, setpopshow] = useState(false)
  const [status, setstatus] = useState("success")
  return (
    <>
    <AppContext.Provider value={{popshow, setpopshow ,status , setstatus}}>
        {children}
    </AppContext.Provider>
    </>
)
}

export default Context