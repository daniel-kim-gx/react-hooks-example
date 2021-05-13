import { css } from "@emotion/react";
import { PageLayout } from "../components/PageLayout";

export function HomePage(props) {
  console.log("page props : ", props);
  return (
    <PageLayout
      css={css`
        font-size: 4rem;
        text-align: left;
      `}
    >
      Welcome to
      <br />
      <strong>react hooks example</strong>
      <br />
      by <em>Dan Kim</em>
    </PageLayout>
  );
}
