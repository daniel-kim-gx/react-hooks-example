import { useState } from "react";
import { css } from "@emotion/react";
import { Router, Link } from "@reach/router";
import { useSnackBar } from "../hooks/useSnackBar";

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
  const toast = useSnackBar();
  const [toastText, setToastText] = useState("");

  const handleClick = () => {
    toast(toastText);
    setToastText("");
  };

  return (
    <div>
      <h2>[Example 1] example 1</h2>

      <label htmlFor="toast-text">
        Toast text
        <input
          id="toast-text"
          type="text"
          name="toast-text"
          value={toastText}
          onChange={(e) => setToastText(e.target.value)}
        />
      </label>

      <button onClick={handleClick}>toast</button>
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
