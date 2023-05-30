import { ThemeProvider } from "styled-components";
import { Header } from "../../components/Header";
import { defaultTheme } from "../../styles/theme/default";
import { Testee } from "./styles";
import { MapPinLine } from "phosphor-react";

export const Checkout = () => (
  <>
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Testee>
        <h2>Complete seu pedido</h2>
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

          <div>
            <h2>Café selecionados</h2>
            <div>
              <p>Total de itens</p>
              <p>Entrega</p>
              <p>Total</p>
              <button>CONFIRMAR PEDIDO</button>
            </div>
          </div>

        <div>
          <h4>Pagamento</h4>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
          <div>
            <span>CARTÃO DE CRÉDITO</span> <span>CARTÃO DE DÉBITO</span>{" "}
            <span>DINHEIRO</span>
          </div>
        </div>
      </Testee>
    </ThemeProvider>
  </>
);
