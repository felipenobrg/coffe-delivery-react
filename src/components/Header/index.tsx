import { MapPin, ShoppingCart } from "phosphor-react"
import { CartAmount, HeaderContainer } from "./styles"
import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
      <>
        <HeaderContainer>
        <img src="./src/assets/coffe-logo.svg" alt="" />
        <p>
          <MapPin size={22} color="#4B2995" weight="fill" /> João Pessoa, PB
        </p>
        <span>
          <button>
            <NavLink to={"/checkout"}>
            <ShoppingCart size={22} color="#C47F17" weight="fill" />
            <CartAmount>1</CartAmount>
            </NavLink>
          </button>
        </span>
      </HeaderContainer>
      </>
      )}