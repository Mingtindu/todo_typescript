import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={(theme: any) => css`
      /* CSS Reset / Base */
      *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: Arial, Helvetica, sans-serif;
        background: ${theme.colors.background};
        color: ${theme.colors.text};
        line-height: 1.5;
      }

      button {
        font-family: inherit;
      }

      input, textarea {
        font-family: inherit;
      }
    `}
  />
);

export default GlobalStyles;
