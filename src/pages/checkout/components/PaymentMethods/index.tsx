import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react"
import { PaymentMethodsContainer } from "./styles"

export const PaymentMethods = () => {
    return (
      <PaymentMethodsContainer>
        <div className="payment-div">
        <p className="p-payment">
          <CurrencyDollar size={20} color="#8047F8" weight="fill" />{" "}
          Pagamento{" "}
        </p>
        <p className="p-payment-deliver">
          O pagamento é feito na entrega. Escolha a forma que deseja pagar
        </p>
        <div className="button-container">
          <button>
            {" "}
            <CreditCard size={18} color="#8047F8" /> CARTÃO DE CRÉDITO
          </button>
          <button>
            {" "}
            <Bank size={18} color="#8047F8" /> CARTÃO DE DÉBITO
          </button>
          <button>
            {" "}
            <Money size={18} color="#8047F8" /> DINHEIRO
          </button>
        </div>
        </div>
      </PaymentMethodsContainer>
    )
}