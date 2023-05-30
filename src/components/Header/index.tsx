import { MapPin, ShoppingCart } from "phosphor-react"
import { HeaderContainer } from "./styles"

export const Header = () => {
    return (
        <HeaderContainer>
        <img src="./src/assets/coffe-logo.svg" alt="" />
        <p>
          <MapPin size={22} color="#4B2995" weight="fill" /> João Pessoa, PB
        </p>
        <span>
          <button>
            <ShoppingCart size={22} color="#C47F17" weight="fill" />
          </button>
        </span>
      </HeaderContainer>
    )
}