import { AmountItens, ConfirmOrder, SelectedCoffeContainer } from "./styles";
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
        <p>Total de itens</p>
        <p>Entrega</p>
        <h4>Total</h4>
      </AmountItens>
      <ConfirmOrder>CONFIRMAR PEDIDO</ConfirmOrder>
    </SelectedCoffeContainer>
  );
};
