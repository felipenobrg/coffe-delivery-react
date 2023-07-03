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

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export const ChosenCoffe = ({ coffee }: CoffeeCartCardProps) => {
  const { changeCartItemQuantity } = useCart();
 
  const coffeeTotal = coffee.price * coffee.quantity;
  const formattedPrice = formatMoney(coffeeTotal);
  return (
    <TypeCoffe>
      <TypeImage className="type-image">
        <CoffeImg src={`/coffees/${coffee.srcImg}`} alt="" />
        <NameCoffee>{coffee.title}</NameCoffee>
        <Price>{formattedPrice}</Price>
      </TypeImage>
      <Buttons>
        <IncreaseDecrease>
          <Minus size={18} color="#8047F8"/>
        </IncreaseDecrease>
        <AmountCoffee>{coffee.quantity}</AmountCoffee>
        <IncreaseDecrease>
          <Plus size={18} color="#8047F8" />
        </IncreaseDecrease>
        <Remove>
          <Trash size={18} color="#8047F8" /> Remover
        </Remove>
      </Buttons>
    </TypeCoffe>
  );
};
