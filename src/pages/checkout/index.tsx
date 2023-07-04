import { Header } from "../../components/Header";
import { EnterAdress } from "./components/EnterAdress";
import { Input } from "./components/Input";
import { SelectedCoffe } from "./components/SelectedCoffee";
import {
  AdressContainer,
  CheckoutContainer,
  MainRow,
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
          <SelectedCoffe />
        </MainRow>
      </CheckoutContainer>
    </>
  );
};
