import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import {
  IconsContainer,
  OurCoffes,
  SectionContainer,
} from "./styles.ts";
import "../../styles/global.ts";
import { Header } from "../../components/Header/index.tsx";
import { CoffesCards } from "../../components/CoffesCards/index.tsx";
import CoffeSection from "../../assets/coffe-section.png"

function App() {  
  return (
    <>
      <Header />
      <SectionContainer>
        <div className="about-coffee-section">
          <h1>
            Encontre o café perfeito <br /> para qualquer hora do dia
          </h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a <br />{" "}
            qualquer hora
          </p>
        </div>
        <div>
        <IconsContainer>
          <div className="column">
            <ShoppingCart
              className="shoppingCart-icon"
              weight="fill"
              color="#ffff"
            />{" "}
            Compra simples e segura{" "}
            <Package className="package-icon" weight="fill" color="#ffff" />{" "}
            Embalagem mantém o café intacto
          </div>
          <div>
            <Timer className="timer-icon" weight="fill" color="#ffff" /> Entrega
            rápida e rastreada{" "}
            <Coffee className="coffe-icon" weight="fill" color="#ffff" /> O café
            chega fresquinho até você
          </div>
        </IconsContainer>
        <img
          src={CoffeSection}
          alt=""
        />
        </div>
      </SectionContainer>
      <OurCoffes>Nossos cafés</OurCoffes>

      <CoffesCards />
    </>
  );
}

export default App;
