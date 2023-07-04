import { Route, Routes } from "react-router-dom"
import App from "../pages/Home"
import { Checkout } from "../pages/Checkout"
import { ConfirmedOrder } from "../pages/ConfirmedOrder"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmedorder" element={<ConfirmedOrder />} />
        </Routes>
    )
}