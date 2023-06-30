import { Minus, Plus, Trash } from "phosphor-react";
import {
  AmountCoffee,
  ConfirmOrder,
  IncreaseDecrease,
  Remove,
  SelectedCoffeContainer,
  TypeCoffe,
} from "./styles";

export const SelectedCoffe = () => {
  return (
    <SelectedCoffeContainer>
      <div className="div-h2">
        <h2>Café selecionados</h2>
      </div>
      <TypeCoffe>
        <div className="type-image">
          <img src="src/assets/coffes-images/americano.png" alt="" />
          <p>Expresso Tradicional</p>
        </div>
        <div className="buttons">
          <IncreaseDecrease>
            <Plus size={18} color="#8047F8" />
          </IncreaseDecrease>
          <AmountCoffee>1</AmountCoffee>
          <IncreaseDecrease>
            <Minus size={18} color="#8047F8" />
          </IncreaseDecrease>
          <Remove>
            <Trash size={18} color="#8047F8" /> Remover
          </Remove>
        </div>
        <p>R$9,90</p>
      </TypeCoffe>
      <div className="amount-items">
        <p>Total de itens</p>
        <p>Entrega</p>
        <h4>Total</h4>
      </div>
      <ConfirmOrder>CONFIRMAR PEDIDO</ConfirmOrder>
    </SelectedCoffeContainer>
  );
};
