import { Header } from "../../components/Header";
import { EnterAdress } from "./components/EnterAdress";
import { Input } from "./components/Input";
import { PaymentMethods } from "./components/PaymentMethods";
import { SelectedCoffe } from "./components/SelectedCoffee";
import {
  AdressContainer,
  CheckoutContainer,
  MainRow,
  PaymentContainer,
  SelectedCoffeContainer,
} from "./styles";

export const Checkout = () => {
  return (
    <>
      <Header />
      <CheckoutContainer>
        <h2>Complete seu pedido</h2>
        <MainRow>
          <AdressContainer>
            <EnterAdress />
            <Input />
          </AdressContainer>

          <SelectedCoffeContainer>
            <SelectedCoffe />
          </SelectedCoffeContainer>
        </MainRow>

        <PaymentContainer>
          <PaymentMethods />
        </PaymentContainer>
      </CheckoutContainer>
    </>
  );
};
