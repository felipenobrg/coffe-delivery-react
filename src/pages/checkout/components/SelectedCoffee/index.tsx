import { AmountItens, ConfirmOrder, SelectedCoffeContainer, TotalItems } from "./styles";
import { ChosenCoffe } from "./ChosenCoffe";
import { useCart } from "../../../../hooks/useCoffeContext";

export const SelectedCoffe = () => {
  const { cartItems } = useCart()
  return (
    <SelectedCoffeContainer>
      <h2>Café selecionados</h2>

      {cartItems.map((item) => {
        return <ChosenCoffe key={item.id} coffee={item} />
      })}

      <AmountItens>
        <TotalItems>
          <p>Total de itens</p>
          <p>R$29,70</p>
        </TotalItems>
        <TotalItems>
          <p>Entrega</p>
          <p>R$3,50</p>
        </TotalItems>
        <TotalItems>
          <h4>Total</h4>
          <h4>R$33,20</h4>
        </TotalItems>
      </AmountItens>
      <ConfirmOrder>CONFIRMAR PEDIDO</ConfirmOrder>
    </SelectedCoffeContainer>
  );
};
