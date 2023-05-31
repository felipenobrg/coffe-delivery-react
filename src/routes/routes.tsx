import { Route, Routes } from "react-router-dom"
import App from "../App"
import { Checkout } from "../pages/Checkout/index"
import { ConfirmedOrder } from "../pages/ConfirmedOrder/index"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmedorder" element={<ConfirmedOrder />} />
        </Routes>
    )
}