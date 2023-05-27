import { MapPin, ShoppingCart } from "phosphor-react";
import { HeaderContainer } from "./style";
import "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HeaderContainer>
        <img src="./src/assets/coffe-logo.svg" alt="" />
        <p>
          <MapPin size={22} color="#4B2995" weight="fill" /> João Pessoa, PB 
        </p>
       <span>
        <button><ShoppingCart size={22} color="#C47F17" weight="fill" /></button>
       </span>
      </HeaderContainer>
    </ThemeProvider>
  );
}

export default App;
