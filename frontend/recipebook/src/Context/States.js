import { createContext, useState } from "react"

export const Context=createContext()

const States=({children})=>{
   const [recipe,setRecipe]=useState(null)
 
    return(
        <Context.Provider value={{food:[recipe,setRecipe]}}>
        {children}
        </Context.Provider>
    )
}

export default States
