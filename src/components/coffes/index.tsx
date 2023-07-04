import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { ButtonCoffe, CoffeAmountContainer, CoffeAmountSpan, CoffesAvailableContainer, Description, ImgCoffe, Price, ShoppingCartContainer, Tags, Title } from "./styles";
import { useCart } from "../../hooks/useCoffeContext";
import { useState } from "react";

export interface Coffee {
  id: string;
  title: string
  tags: string[];
  description: string;
  srcImg: string;
  price: number;
  amount: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export const CoffesAvailable = ({ coffee }: CoffeeProps) => {
  const [quantity, setQuantity] = useState(1)

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
          <Price><span>R$</span>{coffee.price}</Price>
            <ButtonCoffe disabled={quantity <= 1} onClick={handleDecrease}><Minus color="#8047F8" /></ButtonCoffe>
            <CoffeAmountSpan>{quantity}</CoffeAmountSpan>
            <ButtonCoffe onClick={handleIncrease}><Plus color="#8047F8" /></ButtonCoffe>
            <ShoppingCartContainer onClick={handleAddToCart}>
              <ShoppingCart size={18} weight="fill" color="#fff" />
            </ShoppingCartContainer>
          </CoffeAmountContainer>
        </CoffesAvailableContainer>
  );
}
