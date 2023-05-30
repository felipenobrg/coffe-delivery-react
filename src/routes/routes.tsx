import { Route, Routes } from "react-router-dom"
import App from "../App"
import { Checkout } from "../pages/checkout"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
    )
}