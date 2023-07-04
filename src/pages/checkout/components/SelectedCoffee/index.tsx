import { AmountItens, ConfirmOrder, SelectedCoffeContainer, SpacinPrice, TotalItems } from "./styles";
import { ChosenCoffe } from "./ChosenCoffe";
import { useCart } from "../../../../hooks/useCoffeContext";
import { formatMoney } from "../../../../utils/formatMoney";

export const SelectedCoffe = () => {
  const { cartItems, cartItemsTotal, cartItemTotalPlusDelivery, cartQuantity } = useCart()
  const formattedItemTotal = formatMoney(cartItemsTotal)
  const formattedItemTotalPlusDelivery = formatMoney(cartItemTotalPlusDelivery)

  return (
    <SelectedCoffeContainer>
      <h2>Café selecionados</h2>

      {cartItems.map((item) => {
        return <ChosenCoffe key={item.id} coffee={item} />
      })}

        <AmountItens>
        <TotalItems>
          <p>Total de itens</p>
          <SpacinPrice>R${formattedItemTotal}</SpacinPrice>
        </TotalItems>
        <TotalItems>
          <p>Entrega</p>
          <SpacinPrice>R$3,50</SpacinPrice>
        </TotalItems>
        <TotalItems>
          <h4>Total</h4>
          <SpacinPrice>R${formattedItemTotalPlusDelivery}</SpacinPrice>
        </TotalItems>
      </AmountItens>
      <ConfirmOrder disabled={cartQuantity <= 0}>CONFIRMAR PEDIDO</ConfirmOrder>
    </SelectedCoffeContainer>
  );
};
