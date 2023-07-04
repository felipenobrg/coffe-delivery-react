import { Minus, Plus, Trash } from "phosphor-react";
import {
  AmountCoffee,
  Buttons,
  CoffeImg,
  IncreaseDecrease,
  NameCoffee,
  Price,
  Remove,
  TypeCoffe,
  TypeImage,
} from "./styles";
import { CartItem } from "../../../../../context/CoffeContext";
import { useCart } from "../../../../../hooks/useCoffeContext";
import { formatMoney } from "../../../../../utils/formatMoney";

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export const ChosenCoffe = ({ coffee }: CoffeeCartCardProps) => {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  const handleIncrease = () => {
    changeCartItemQuantity(coffee.id, "increase")
  }

  const handleDecrease = () => {
    changeCartItemQuantity(coffee.id, "decrease")
  }

  const handleRemove = () => {
    removeCartItem(coffee.id)
  }

  const coffeeTotal = coffee.price * coffee.quantity;
  const formattedPrice = formatMoney(coffeeTotal);
  return (
    <>
      <TypeCoffe>
        <TypeImage className="type-image">
          <CoffeImg src={coffee.srcImg} alt="" />
          <NameCoffee>{coffee.title}</NameCoffee>
          <Price>{formattedPrice}</Price>
        </TypeImage>
        <Buttons>
          <IncreaseDecrease onClick={handleDecrease} >
            <Minus size={18} color="#8047F8" />
          </IncreaseDecrease>
          <AmountCoffee>{coffee.quantity}</AmountCoffee>
          <IncreaseDecrease onClick={handleIncrease}>
            <Plus size={18} color="#8047F8" />
          </IncreaseDecrease>
          <Remove onClick={handleRemove}>
            <Trash size={18} color="#8047F8" /> Remover
          </Remove>
        </Buttons>
      </TypeCoffe>
    </>
  );
};
