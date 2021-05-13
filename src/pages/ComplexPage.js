import { useState } from "react";
import { css } from "@emotion/react";
import { Router, Link } from "@reach/router";
import { useSnackBar } from "../hooks/useSnackBar";
import { PageLayout } from "../components/PageLayout";

export function ComplexPage() {
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
  const toast = useSnackBar();
  const [toastText, setToastText] = useState("");

  const handleClick = () => {
    toast(toastText);
    setToastText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div>
      <h2>[Example 1] SnackBar Context</h2>

      <label htmlFor="toast-text">
        Toast text
        <input
          id="toast-text"
          type="text"
          name="toast-text"
          value={toastText}
          onChange={(e) => setToastText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </label>

      <button onClick={handleClick}>toast</button>
    </div>
  );
}
