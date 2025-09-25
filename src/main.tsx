import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import ThemeProvider from "./styles/ThemeProvider";
import { ThemeProvider as TailwindThemeProvider } from "./contexts/ThemeContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TailwindThemeProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </TailwindThemeProvider>
  </StrictMode>
);
