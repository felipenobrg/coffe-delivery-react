import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import {
  CoffeStyle,
  IconsContainer,
  OurCoffes,
  SectionContainer,
} from "./styles.ts";
import "./styles/global.ts";
import { CoffesAvailable } from "./components/Coffes/index.tsx";
import { Header } from "./components/Header/index.tsx";

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
          <IconsContainer>
            <div>
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
              <Timer className="timer-icon" weight="fill" color="#ffff" />{" "}
              Entrega rápida e rastreada{" "}
              <Coffee className="coffe-icon" weight="fill" color="#ffff" /> O
              café chega fresquinho até você
            </div>
          </IconsContainer>
          <img
            src="https://s3-alpha-sig.figma.com/img/731e/f48d/acb13d1b7c718c6f523d5dc02407a226?Expires=1685923200&Signature=m2BPFQQgeohcIuk9CWCHIympI9pTjHRwQGa3vqrPhoRliggF1uhRf3ty1d6Clt8JanRp1W7r6Pla9jZL7TeBz~SRCKEK4uo9jiJnJEQzaBKSJqgqWgvmZgd8Bi00qxVxj-bG8AsWwjDRhOh9Zd2Pt1S-ZuV30S4YhuOwAYRGyS8TAT-6bsdyvbncZmC4NaLcU5md8Wc8q-ckyJ-G2saDx7C-nIIJ5RBFAb8munuiGDwIJH~7I2jt2~8v~7qkCwloDH8ciE1dvwR3f3qoE6btLgKK03JVfBM5W6360EEqAz9mPLIJkQ2sBVl6~Uz0McMPQKz7rHTGIxiIxuRNGeAV9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </SectionContainer>

        <OurCoffes>Nossos cafés</OurCoffes>

        <CoffeStyle>
          <CoffesAvailable
            typeCoffe="TRADICIONAL"
            typeCoffeComplete="Expresso Tradicional"
            descriptionCoffe="O tradicional café feito com água quente e grãos moídos"
            price={9.99}
          />

          <CoffesAvailable
            typeCoffe="TRADICIONAL"
            typeCoffeComplete="Expresso Tradicional"
            descriptionCoffe="O tradicional café feito com água quente e grãos moídos"
            price={9.99}
          />

          <CoffesAvailable
            typeCoffe="TRADICIONAL"
            typeCoffeComplete="Expresso Tradicional"
            descriptionCoffe="O tradicional café feito com água quente e grãos moídos"
            price={9.99}
          />

          <CoffesAvailable
            typeCoffe="TRADICIONAL"
            typeCoffeComplete="Expresso Tradicional"
            descriptionCoffe="O tradicional café feito com água quente e grãos moídos"
            price={9.99}
          />
        </CoffeStyle>

        <CoffeStyle>
          <CoffesAvailable
            typeCoffe="TRADICIONAL"
            typeCoffeComplete="Expresso Tradicional"
            descriptionCoffe="O tradicional café feito com água quente e grãos moídos"
            price={9.99}
          />

          <CoffesAvailable
            typeCoffe="TRADICIONAL"
            typeCoffeComplete="Expresso Tradicional"
            descriptionCoffe="O tradicional café feito com água quente e grãos moídos"
            price={9.99}
          />

          <CoffesAvailable
            typeCoffe="TRADICIONAL"
            typeCoffeComplete="Expresso Tradicional"
            descriptionCoffe="O tradicional café feito com água quente e grãos moídos"
            price={9.99}
          />

          <CoffesAvailable
            typeCoffe="TRADICIONAL"
            typeCoffeComplete="Expresso Tradicional"
            descriptionCoffe="O tradicional café feito com água quente e grãos moídos"
            price={9.99}
          />
        </CoffeStyle>
    </>
  );
}

export default App;
