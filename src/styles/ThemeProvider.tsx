import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import type{ ReactNode } from "react";
import theme from "./theme";
import GlobalStyles from "./global";

interface Props {
  children: ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  return (
    <EmotionThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
