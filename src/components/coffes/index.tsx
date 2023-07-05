import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { ButtonCoffe, CoffeAmountContainer, CoffeAmountSpan, CoffesAvailableContainer, Description, ImgCoffe, Price, ShoppingCartContainer, Tags, Title } from "./styles";
import { useCart } from "../../hooks/useCoffeContext";
import { useState } from "react";
import { formatMoney } from "../../utils/formatMoney";

export interface Coffees {
  id: number;
  title: string
  tags: string[];
  description: string;
  srcImg: string;
  price: number;
  amount: number;
}

interface CoffeeProps {
  coffee: Coffees;
}

const CoffesAvailable = ({ coffee }: CoffeeProps) => {
  const [quantity, setQuantity] = useState(1)
  const formattedPrice = formatMoney(coffee.price)

  const handleIncrease = () => {
    setQuantity(state => state + 1)
  }
  
  const handleDecrease = () => {
    setQuantity(state => state - 1)
  }

  const { addCoffeToCart } = useCart()
  
  const handleAddToCart = () => {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeToCart(coffeeToAdd)
  }

  return (
        <CoffesAvailableContainer>
          <ImgCoffe src={coffee.srcImg} alt="" />
          <Tags>{coffee.tags.map(tag => (
            <span key={`${coffee.id}${tag}`}>{tag}</span>
          ))}
          </Tags>
          <Title>{coffee.title}</Title>
          <Description>{coffee.description}</Description>
          <CoffeAmountContainer> 
          <Price><span>R$</span>{formattedPrice}</Price>
            <ButtonCoffe disabled={quantity <= 1} onClick={handleDecrease}><Minus weight="bold" color="#8047F8" /></ButtonCoffe>
            <CoffeAmountSpan>{quantity}</CoffeAmountSpan>
            <ButtonCoffe onClick={handleIncrease}><Plus weight="bold" color="#8047F8" /></ButtonCoffe>
            <ShoppingCartContainer onClick={handleAddToCart}>
              <ShoppingCart size={22} weight="fill" color="#fff" />
            </ShoppingCartContainer>
          </CoffeAmountContainer>
        </CoffesAvailableContainer>
  );
}

export default CoffesAvailable
