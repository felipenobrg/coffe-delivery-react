import { AmountItens, ConfirmOrder, SelectedCoffeContainer, TotalItems } from "./styles";
import { ChosenCoffe } from "./ChosenCoffe";

export const SelectedCoffe = () => {
  return (
    <SelectedCoffeContainer>
        <h2>Café selecionados</h2>
      
      <ChosenCoffe />
      <ChosenCoffe />
      <ChosenCoffe />
      <ChosenCoffe />

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
