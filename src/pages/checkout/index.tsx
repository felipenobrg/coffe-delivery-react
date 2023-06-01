import { Header } from "../../components/Header";
import { CheckoutContainer } from "./styles";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { NavLink } from "react-router-dom";

export const Checkout = () => (
  <>
      <Header />
      <CheckoutContainer>
        <h2>Complete seu pedido</h2>
        <div className="main-row">
        <div className="form-container">
          <p> <MapPinLine size={22} color="#C47F17" /> Endereço de Entrega</p>
          <p> Informe o endereço onde receber seu pedido</p>
          <form className="form">
            <input className="cep" type="number" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <div className="row">
            <input className="number" type="number" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            </div>
            <div className="row2">
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input className="uf" type="text" placeholder="UF" />
            </div>
          </form>
        </div>
       
          <div className="coffe-select-container">
          <div>
          <h2>Café selecionados</h2>
          </div>
            <div className="amount-items">
              <p>Total de itens</p>
              <p>Entrega</p>
              <h4>Total</h4>
            </div>
            <NavLink to={"/confirmedorder"}>
            <button>CONFIRMAR PEDIDO</button>
            </NavLink>
          </div>
          </div>

        <div className="payment-container">
          <div className="payment-div">
          <p><CurrencyDollar size={20} color="#8047F8" weight="fill" /> Pagamento </p>
          <p className="p-payment-deliver">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
          <div className="button-container">
            <button> <CreditCard color="#8047F8"/>  CARTÃO DE CRÉDITO</button>
            <button> <Bank size={16} color="#8047F8"/> CARTÃO DE DÉBITO</button>
            <button> <Money size={16} color="#8047F8"/> DINHEIRO</button>
          </div>
        </div>
        </div>
      </CheckoutContainer>
  </>
);
