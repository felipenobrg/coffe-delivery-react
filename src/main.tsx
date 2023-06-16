import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.ts";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/routes.tsx";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default.ts";
import { CoffeContextProvider } from "./context/CoffeContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <CoffeContextProvider>
        <Router />
      </CoffeContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
