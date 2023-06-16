import { useContext } from "react";
import { CoffeContext } from "../context/CoffeContext";

export function useCart() {
    const context = useContext(CoffeContext)
    return context
}