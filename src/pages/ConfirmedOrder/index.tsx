import { Header } from "../../components/Header";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { AboutOrder, ConfirmedOrderContainer } from "./styles";
import MotoboyPhoto from "../../assets/motoboy.png"

export const ConfirmedOrder = () => {
  return (
    <>
      <Header />

      <ConfirmedOrderContainer>
        <div className="orderIsConfirmed">
          <h1>Uhu!Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>

        <AboutOrder>
          <div className="information-order-container">
            <div className="information-order">
              <div>
                <MapPin size={25} color="#ffff" weight="fill" />
              </div>
              <div>
                <p>
                  Entrega em <strong>João Pessoa, PB</strong>
                </p>
                <p>Rua João Lima Barbosa, 45</p>
              </div>
            </div>

            <div className="timer-order-container">
              <div className="timer-order">
                <div>
                  <Timer size={25} weight="fill" color="#ffff" />
                </div>
                <div>
                  <p>Previsão de entrega</p>
                  <p>
                    <strong>20 min - 30 min</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="payment-order-container">
              <div className="payment-order">
              <div>
                <CurrencyDollar size={25} weight="fill" color="#ffff" />
              </div>
              <div>
                <p>Pagamento na entrega</p>
                <p>
                  <strong>Cartão de Crédito</strong>
                </p>
              </div>
            </div>
            </div>
          </div>

          <div>
            <img src={MotoboyPhoto}alt="" />
          </div>
        </AboutOrder>
      </ConfirmedOrderContainer>
      </>
  );
};
