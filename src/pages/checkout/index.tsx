import { Header } from "../../components/Header";
import { EnterAdress } from "./components/EnterAdress";
import { Input } from "./components/Input";
import { PaymentMethods } from "./components/PaymentMethods";
import {
  AdressContainer,
  CheckoutContainer,
  PaymentContainer,
  SelectedCoffe,
} from "./styles";

export const Checkout = () => {
  return (
    <>
      <Header />
      <CheckoutContainer>
        <h2>Complete seu pedido</h2>

        <div className="main-row">
          <AdressContainer>
            <EnterAdress />
            <Input />
          </AdressContainer>

          <SelectedCoffe>
            <div>
              <h2>Café selecionados</h2>
            </div>
            <div className="amount-items">
              <p>Total de itens</p>
              <p>Entrega</p>
              <h4>Total</h4>
            </div>
              <button>CONFIRMAR PEDIDO</button>
          </SelectedCoffe>
        </div>

        <PaymentContainer>
          <PaymentMethods />
        </PaymentContainer>
      </CheckoutContainer>
    </>
  );
};
