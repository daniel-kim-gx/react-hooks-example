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
        <Link to="./2">two</Link>
      </div>

      <Router>
        <Example1 default path="/" />
        <Example2 path="/2" />
      </Router>
    </div>
  );
}

function Example1() {
  return (
    <div>
      <h2>[Example 1] example one</h2>
      <div>
        <MultipleCounters />
      </div>
    </div>
  );
}

function Example2() {
  return (
    <div>
      <h2>[Example 2] example two</h2>
      <div>example two.</div>
    </div>
  );
}
