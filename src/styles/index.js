import { Global, css } from "@emotion/react";

export const GlobalStyle = () => (
  <Global
    styles={css`
      html,
      body,
      #root {
        height: 100%;
        min-height: 100vh;
      }
    `}
  />
);
