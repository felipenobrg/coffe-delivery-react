import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { PaymentMethodsContainer } from "./styles";

export const PaymentMethods = () => {
  return (
    <PaymentMethodsContainer>
      <div className="payment-div">
        <p className="p-payment">
          <CurrencyDollar size={20} color="#8047F8" weight="fill" /> Pagamento{" "}
        </p>
        <p className="p-payment-deliver">
          O pagamento é feito na entrega. Escolha a forma que deseja pagar
        </p>
        <div className="payments-container">
          <div className="input-card">
            <input type="radio" />
            <label htmlFor="">
              <CreditCard size={18} color="#8047F8" /> CARTÃO DE CRÉDITO
            </label>
          </div>
          <div className="input-card">
            <input type="radio" checked />
            <label htmlFor="">
              <Bank size={18} color="#8047F8" /> CARTÃO DE DÉBITO
            </label>
          </div>
          <div className="input-card">
            <input type="radio" checked />
            <label htmlFor="">
              <Money size={18} color="#8047F8" /> DINHEIRO
            </label>
          </div>
        </div>
      </div>
    </PaymentMethodsContainer>
  );
};
