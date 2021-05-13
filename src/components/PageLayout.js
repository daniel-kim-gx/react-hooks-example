import React from "react";
import { css } from "@emotion/react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function PageLayout({ className, children }) {
  return (
    <>
      <Header />
      <div
        css={css`
          width: 100%;
          display: flex;
          justify-content: center;
        `}
      >
        <main
          className={className}
          css={css`
            width: 100%;
            max-width: 800px;
            min-height: 1000px;
            padding: 40px 0 120px 0;
          `}
        >
          {children}
        </main>
      </div>

      <Footer />
    </>
  );
}
