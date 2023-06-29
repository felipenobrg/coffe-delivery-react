import {  Trash } from "phosphor-react";
import { SelectedCoffeContainer } from "./styles";

export const SelectedCoffe = () => {
  return (
    <SelectedCoffeContainer>
      <div>
        <h2>Café selecionados</h2>
      </div>
      <div>
        <img src="../assets/coffes-images/americano.png" alt="" />
        <p>Expresso Tradicional</p>
         <div>
         <button>+</button>
         <p>2</p>
         <button>-</button>
         </div>
         <div>
            <p><Trash /> Remover</p> 
         </div>
         <p>R$9,90</p>
      </div>
      <div className="amount-items">
        <p>Total de itens</p>
        <p>Entrega</p>
        <h4>Total</h4>
      </div>
      <button>CONFIRMAR PEDIDO</button>
    </SelectedCoffeContainer>
  );
};
