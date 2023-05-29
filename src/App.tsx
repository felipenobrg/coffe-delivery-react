import { Coffee, MapPin, Package, ShoppingCart, Timer } from "phosphor-react";
import { HeaderContainer, IconsContainer, SectionContainer } from "./style";
import "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <HeaderContainer>
          <img src="./src/assets/coffe-logo.svg" alt="" />
          <p>
            <MapPin size={22} color="#4B2995" weight="fill" /> João Pessoa, PB
          </p>
          <span>
            <button>
              <ShoppingCart size={22} color="#C47F17" weight="fill" />
            </button>
          </span>
        </HeaderContainer>


      <SectionContainer>
        <div className="about-coffee-section">
          <h1>
            Encontre o café perfeito <br /> para qualquer hora do dia
          </h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a <br />{" "}
            qualquer hora
          </p>
          <img
          src="https://s3-alpha-sig.figma.com/img/731e/f48d/acb13d1b7c718c6f523d5dc02407a226?Expires=1685923200&Signature=m2BPFQQgeohcIuk9CWCHIympI9pTjHRwQGa3vqrPhoRliggF1uhRf3ty1d6Clt8JanRp1W7r6Pla9jZL7TeBz~SRCKEK4uo9jiJnJEQzaBKSJqgqWgvmZgd8Bi00qxVxj-bG8AsWwjDRhOh9Zd2Pt1S-ZuV30S4YhuOwAYRGyS8TAT-6bsdyvbncZmC4NaLcU5md8Wc8q-ckyJ-G2saDx7C-nIIJ5RBFAb8munuiGDwIJH~7I2jt2~8v~7qkCwloDH8ciE1dvwR3f3qoE6btLgKK03JVfBM5W6360EEqAz9mPLIJkQ2sBVl6~Uz0McMPQKz7rHTGIxiIxuRNGeAV9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
        </div>
        <IconsContainer>
          <div>
            <ShoppingCart className="shoppingCart-icon" weight="fill" color="#ffff" /> Compra
            simples e segura <Package  className="package-icon" weight="fill" color="#ffff" />{" "}
            Embalagem mantém o café intacto
          </div>
          <div>
            <Timer className="timer-icon" weight="fill" color="#ffff" /> Entrega rápida e rastreada{" "}
            <Coffee className="coffe-icon" weight="fill" color="#ffff" /> O café chega fresquinho até você
          </div>
        </IconsContainer>
      </SectionContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
