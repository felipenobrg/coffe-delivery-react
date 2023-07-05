import { MapPin, ShoppingCart } from "phosphor-react";
import { CartAmount, HeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCoffeContext";
import CoffeeLogo from "../../assets/coffe-logo.svg"

export const Header = () => {
  const { cartQuantity } = useCart();

  return (
    <HeaderContainer>
      <img src={CoffeeLogo} alt="" />
      <p>
        <MapPin size={18} color="#8047F8" weight="fill" /> João Pessoa, PB
      </p>
      <span>
        <NavLink to={"/checkout"}>
          <button>
            <ShoppingCart size={18} color="#C47F17" weight="fill" />
            <CartAmount>{cartQuantity}</CartAmount>
          </button>
        </NavLink>
      </span>
    </HeaderContainer>
  );
};
