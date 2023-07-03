import { ReactNode, createContext, useState } from "react";
import { Coffee } from "../components/Coffes";
import { produce } from "immer";

export interface CartItem extends Coffee {
  quantity: number;
}
interface CoffeContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  addCoffeToCart: (coffee: CartItem) => void;
  changeCartItemQuantity: (
    cartItemsId: number,
    type: "increase" | "decrease"
  ) => void;
}

interface CoffeProviderContextProps {
  children: ReactNode;
}

export const CoffeContext = createContext({} as CoffeContextType);
export function CoffeContextProvider({ children }: CoffeProviderContextProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartQuantity = cartItems.length;

  const addCoffeToCart = (coffee: CartItem) => {
    const coffeAlreadyExistInCart = cartItems.findIndex(
      (cartItems) => cartItems.id === coffee.id
    );
    console.log(cartItems);

    const newCart = produce(cartItems, (draft) => {
      if (coffeAlreadyExistInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeAlreadyExistInCart].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  };

  const changeCartItemQuantity = (
    cartItemsId: number,
    type: "increase" | "decrease"
  ) => {
    const newCart = produce(cartItemsId, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemsId
      );

      if (coffeeExistsInCart >= 0) {
        const item = draft(coffeeExistsInCart);
        draft[coffeeExistsInCart].quantity =
          type == "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCartItems(newCart);
  };

  return (
    <CoffeContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addCoffeToCart,
        changeCartItemQuantity,
      }}
    >
      {children}
    </CoffeContext.Provider>
  );
}
