import { ThemeProvider } from "styled-components";
import { Header } from "../../components/Header";
import { defaultTheme } from "../../styles/theme/default";

export const Checkout = () => (
  <>
    <ThemeProvider theme={defaultTheme}>
      <Header />
    </ThemeProvider>
  </>
);
