import { Header } from "../../components/Header";
import { EnterAdress } from "./components/EnterAdress";
import { Input } from "./components/Input";
import { SelectedCoffe } from "./components/SelectedCoffee";
import {
  AdressContainer,
  CheckoutContainer,
  CompleteYourOrder,
  MainRow,
} from "./styles";

export const Checkout = () => {
  return (
    <>
      <Header />
      <CheckoutContainer>
        <CompleteYourOrder>Complete seu pedido</CompleteYourOrder>
        <MainRow>
          <AdressContainer>
            <EnterAdress />
            <Input />
          </AdressContainer>
          <SelectedCoffe />
        </MainRow>
      </CheckoutContainer>
    </>
  );
};
