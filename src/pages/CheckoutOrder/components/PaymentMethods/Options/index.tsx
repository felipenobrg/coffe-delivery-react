import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { PaymentMethod } from "../index";
import { PaymentMethodsContainer } from "../styles";

// eslint-disable-next-line react-refresh/only-export-components
export const paymentMethodsType = {
  credit: {
    label: "Cartão de Crédito",
    icon: <CreditCard size={18} />,
  },
  debit: {
    label: "Cartão de Débito",
    icon: <Bank size={18} />,
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={18} />,
  },
};

export const PaymentMethodsOptions = () => {
  return (
    <PaymentMethodsContainer>
      <div className="payment-div">
        <p className="p-payment">
          <CurrencyDollar size={20} color="#8047F8" weight="fill" /> Pagamento{" "}
        </p>
        <p className="p-payment-deliver">
          O pagamento é feito na entrega. Escolha a forma que deseja pagar
        </p>
      </div>
      <div className="payments-container">
      {Object.entries(paymentMethodsType).map(([key, { label, icon }]) => (
        <PaymentMethod label={label} id={key} icon={icon} value={key} />
      ))}
      </div>
    </PaymentMethodsContainer>
  );
};
