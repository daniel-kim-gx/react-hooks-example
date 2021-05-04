import { css } from "@emotion/react";
import { Router, Link } from "@reach/router";

export function ComplexPage() {
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
      <h2>[Example 1] example 1</h2>
    </div>
  );
}

function Example2() {
  return (
    <div>
      <h2>[Example 1] example 1</h2>
    </div>
  );
}
