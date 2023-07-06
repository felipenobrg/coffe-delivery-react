import { ReactNode, createContext, useEffect, useState } from "react";
import { Coffees } from "../components/CoffesAvailable";
import { produce } from "immer";

export interface CartItem extends Coffees {
  id: number;
  title: string
  tags: string[];
  description: string;
  srcImg: string;
  price: number;
  amount: number;
  quantity: number;
}
interface CoffeContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  cartItemTotalPlusDelivery: number;
  addCoffeToCart: (coffee: CartItem) => void;
  changeCartItemQuantity: (
    cartItemsId: number,
    type: "increase" | "decrease"
  ) => void;
  removeCartItem: (CartItemId: number) => void;
}

interface CoffeProviderContextProps {
  children: ReactNode;
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeDelivery:cartItems"

export const CoffeContext = createContext({} as CoffeContextType);
export function CoffeContextProvider({ children }: CoffeProviderContextProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
    if(storedCartItems) {
      return JSON.parse(storedCartItems)
    }
    return []
  });

  const cartQuantity = cartItems.length;

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
     return total + cartItem.price * cartItem.quantity
  }, 0)

  const cartItemTotalPlusDelivery = cartItemsTotal + 3.50

  const addCoffeToCart = (coffee: CartItem) => {
    const coffeAlreadyExistInCart = cartItems.findIndex(
      (cartItems) => cartItems.id === coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (coffeAlreadyExistInCart <= 0) {
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
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemsId
      );

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart];
        draft[coffeeExistsInCart].quantity =
          type == "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCartItems(newCart);
  };

  const removeCartItem = (cartItemsId: number) => {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemsId
      );

      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1);
      }
    });

    setCartItems(newCart);
  };

  useEffect(() => {
  localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CoffeContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotal,
        cartItemTotalPlusDelivery,
        addCoffeToCart,
        changeCartItemQuantity,
        removeCartItem,
      }}
    >
      {children}
    </CoffeContext.Provider>
  );
}
