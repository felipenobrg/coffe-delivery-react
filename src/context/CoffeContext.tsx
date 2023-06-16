import { ReactNode, createContext, useState } from "react";
import { Coffee } from "../components/Coffes";

export interface CartItem extends Coffee {
    quantity: number
}
interface CoffeContextType {
    cartItems: CartItem[]
}

interface CoffeProviderContextProps {
    children: ReactNode
}

export const CoffeContext = createContext({} as CoffeContextType)

export function CoffeContextProvider({ children }: CoffeProviderContextProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

        
    return (
        <CoffeContext.Provider value={{ cartItems }}>
         {children}
       </CoffeContext.Provider>
    )
}