import { ReactNode, createContext, useState } from "react";
import { Coffee } from "../components/Coffes";
import { produce } from "immer";

export interface CartItem extends Coffee {
    quantity: number
}
interface CoffeContextType {
    cartItems: CartItem[]
    addCoffeToCart: (coffee: CartItem) => void
}

interface CoffeProviderContextProps {
    children: ReactNode
}

export const CoffeContext = createContext({} as CoffeContextType)
export function CoffeContextProvider({ children }: CoffeProviderContextProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const addCoffeToCart = (coffee: CartItem) => {
        const coffeAlreadyExistInCart = cartItems.findIndex(
            (cartItems) => cartItems.id === coffee.id
        )

        const newCart = produce(cartItems, (draft) => {
            if(coffeAlreadyExistInCart < 0) {
                draft.push(coffee)
            }
            else {
                draft[coffeAlreadyExistInCart].quantity += coffee.quantity
            }
        })

        setCartItems(newCart)
    }
        
    return (
        <CoffeContext.Provider value={{ cartItems, addCoffeToCart }}>
         {children}
       </CoffeContext.Provider>
    )
}