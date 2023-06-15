import { ShoppingCart } from "phosphor-react";
import { CoffesAvailableContainer, Tags } from "./styles";
import { useState } from "react";
import { NavLink } from "react-router-dom";

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
          <img src={coffee.srcImg} alt="" />
          <Tags>{coffee.tags.map(tag => (
            <span key={`${coffee.id}${tag}`}>{tag}</span>
          ))}
          </Tags>
          <h2>{coffee.title}</h2>
          <p>{coffee.description}</p>
          <p className="coffe-price">{coffee.price}</p>
          <div className="coffe-amount">
            <button onClick={handleDecrease}>-</button>
            <span className="amount">{count}</span>
            <button onClick={handleIncrease}>+</button>
            <NavLink to={"/checkout"}>
            <button className="shopping-cart">
              <ShoppingCart size={13} weight="fill" color="#fff" />
            </button>
            </NavLink>
          </div>
        </CoffesAvailableContainer>
  );
}
