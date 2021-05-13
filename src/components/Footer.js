import React from "react";
import { css } from "@emotion/react";

export function Footer() {
  return (
    <footer
      css={css`
        height: 300px;
        width: 100%;
        background: hotpink;

        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <main
        css={css`
          width: 800px;
          font-size: 0.8rem;
        `}
      >
        Ground X &copy; All Rights Reserved.
      </main>
    </footer>
  );
}
