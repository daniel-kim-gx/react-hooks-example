import { css } from "@emotion/react";
import { Router, Link } from "@reach/router";
import { MultipleCounters } from "../components/MultipleCounters";
import { PageLayout } from "../components/PageLayout";

export function OptimizePage() {
  return (
    <PageLayout>
      <div
        css={css`
          & > a {
            margin-left: 12px;
          }
        `}
      >
        <Link to="./">one</Link>
      </div>

      <Router>
        <Example1 default path="/" />
      </Router>
    </PageLayout>
  );
}

function Example1() {
  return (
    <div>
      <h2>[Example 1] Multiple Counters</h2>
      <div>
        <MultipleCounters />
      </div>
    </div>
  );
}
