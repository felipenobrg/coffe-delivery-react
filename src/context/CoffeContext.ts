// import { ReactNode, createContext, useState } from "react";

// interface CoffeContextType {
//     coffeAmount: number
// }

// interface CoffeContextProps {
//     children: ReactNode
// }

// export const CoffeContext = createContext({} as CoffeContextType)

// export function CoffeContextProvider({ children }: CoffeContextProps) {
//     const [coffeAmount, setCoffeAmount] = useState(0)
    
//     return (
//         <CoffeContext.Provider value={{ coffeAmount }}>
//          {children}
//        </CoffeContext.Provider>
//     )
// }