import { Route, Routes } from "react-router-dom"
import App from "../pages/Home"
import { ConfirmedOrder } from "../pages/ConfirmedOrder"
import { Checkout } from "../pages/CheckoutOrder"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmedorder" element={<ConfirmedOrder />} />
        </Routes>
    )
}