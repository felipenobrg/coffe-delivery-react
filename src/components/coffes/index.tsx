import { ShoppingCart } from "phosphor-react";
import { ButtonCoffe, CoffeAmountContainer, CoffeAmountSpan, CoffesAvailableContainer, Description, ImgCoffe, Price, ShoppingCartContainer, Tags, Title } from "./styles";
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
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount((state) => state + 1);
  };

  const handleDecrease = () => {
    setCount((state) => state - 1);
    if (count <= 0) {
      setCount(0);
    }
  };

  return (
        <CoffesAvailableContainer>
          <ImgCoffe src={coffee.srcImg} alt="" />
          <Tags>{coffee.tags.map(tag => (
            <span key={`${coffee.id}${tag}`}>{tag}</span>
          ))}
          </Tags>
          <Title>{coffee.title}</Title>
          <Description>{coffee.description}</Description>
          <Price>R${coffee.price}</Price>
          <CoffeAmountContainer>
            <ButtonCoffe onClick={handleDecrease}>-</ButtonCoffe>
            <CoffeAmountSpan>{count}</CoffeAmountSpan>
            <ButtonCoffe onClick={handleIncrease}>+</ButtonCoffe>
            <ShoppingCartContainer>
              <ShoppingCart size={18} weight="fill" color="#fff" />
            </ShoppingCartContainer>
          </CoffeAmountContainer>
        </CoffesAvailableContainer>
  );
}
