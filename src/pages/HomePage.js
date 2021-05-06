import { css } from "@emotion/react";

export function HomePage() {
  return (
    <div
      css={css`
        font-size: 4rem;
        text-align: left;
        padding: 5%;
      `}
    >
      Welcome to
      <br />
      <strong>react hooks example</strong>
      <br />
      by <em>Dan Kim</em>
    </div>
  );
}
