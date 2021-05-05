import { useState, useLayoutEffect, useEffect } from "react";
import { Router, Link } from "@reach/router";
import { css } from "@emotion/react";

const generateRandomValue = () =>
  Math.floor(Math.pow(10, 10) + Math.random() * Math.pow(10, 10));

export function BehaviorPage() {
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
  const [value1, setValue1] = useState(0); // useEffect
  const [value2, setValue2] = useState(0); // useLayoutEffect

  useLayoutEffect(() => {
    console.log("[UseEffectComponent] useLayoutEffect 1 called..");
  }, []);

  useLayoutEffect(() => {
    console.log("[UseEffectComponent] useLayoutEffect 2 called..");
  }, []);

  useEffect(() => {
    console.log("[UseEffectComponent] re-rendering... ");
  });

  useEffect(() => {
    if (value1 === 0) {
      setValue1(() => generateRandomValue());
      setValue1(() => generateRandomValue());
    }
  }, [value1]);

  useLayoutEffect(() => {
    if (value2 === 0) {
      setValue2(() => generateRandomValue());
      setValue2(() => generateRandomValue());
    }
  }, [value2]);

  return (
    <div>
      <h2>[Example 1] useEffect vs useLayoutEffect</h2>
      <div>
        <button onClick={() => setValue1(0)}>update value 1</button>
      </div>

      <div>
        <button onClick={() => setValue2(0)}>update value 2</button>
      </div>

      <div
        css={css`
          background: blue;
          color: white;
          font-size: 4rem;
          width: 100%;
          display: flex;
          justify-content: space-between;
        `}
      >
        value1:
        <span>{value1}</span>
      </div>

      <div
        css={css`
          background: blue;
          color: white;
          font-size: 4rem;
          width: 100%;
          display: flex;
          justify-content: space-between;
        `}
      >
        value2:
        <span>{value2}</span>
      </div>
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