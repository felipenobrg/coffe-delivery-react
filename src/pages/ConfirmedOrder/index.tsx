import { Header } from "../../components/Header";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { AboutOrder, ConfirmedOrderContainer } from "./styles";
import MotoboyPhoto from "../../assets/motoboy.png";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../CheckoutOrder";
import { paymentMethodsType } from "../CheckoutOrder/components/PaymentMethods/Options";
import { useEffect } from "react";

interface LocationType {
  state: OrderData;
}

export const ConfirmedOrder = () => {
  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [navigate, state]);

  if (!state) return <></>;

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
                  Entrega em{" "}
                  <strong>
                    {state.cidade}, {state.numero}
                  </strong>
                </p>
                <p>
                  {state.cep} - {state.cidade}, {state.uf}
                </p>
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
                    <strong>
                      {paymentMethodsType[state.paymentMethod].label}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src={MotoboyPhoto} alt="" />
          </div>
        </AboutOrder>
      </ConfirmedOrderContainer>
    </>
  );
};
