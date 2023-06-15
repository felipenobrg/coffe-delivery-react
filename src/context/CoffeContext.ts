import { createContext, useState } from "react";

interface CoffeContextType {
    count: number
    setCount: number
}

export const CoffeContext = createContext({} as CoffeContextType)

export function CoffeContextProvider({ children }) {
    const [count, setCount] = useState(1);
    
    return (
        <CoffeContext.Provider value={count}>
         {children}
       </CoffeContext.Provider>
    )
}