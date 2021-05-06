import { css } from "@emotion/react";
import { Router, Link } from "@reach/router";
import { MultipleCounters } from "../components/MultipleCounters";

export function OptimizePage() {
  return (
    <div>
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
    </div>
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
