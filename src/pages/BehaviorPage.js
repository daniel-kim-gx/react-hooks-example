import { useState, useLayoutEffect, useEffect } from "react";
import { Router, Link } from "@reach/router";
import { css } from "@emotion/react";
import { Timer } from "../components/Timer";
import { PageLayout } from "../components/PageLayout";

const generateRandomValue = () =>
  Math.floor(Math.pow(10, 10) + Math.random() * Math.pow(10, 10));

export function BehaviorPage() {
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
        <Link to="./2">two</Link>
      </div>

      <Router>
        <Example1 default path="/" />
        <Example2 path="/2" />
      </Router>
    </PageLayout>
  );
}

function Example1() {
  const [mounted, setMounted] = useState(true);

  return (
    <div>
      <h2>[Example 1] Timer</h2>
      <div>
        mounted : {mounted}
        <button onClick={() => setMounted((b) => !b)}>Toggle mount</button>
      </div>

      {mounted && <Timer />}
    </div>
  );
}

function Example2() {
  const [value1, setValue1] = useState(0); // useEffect
  const [value2, setValue2] = useState(0); // useLayoutEffect

  useLayoutEffect(() => {
    console.log("[UseEffectComponent] useLayoutEffect 1 called..");
  }, []);

  useLayoutEffect(() => {
    console.log("[UseEffectComponent] useLayoutEffect 2 called..");
  }, []);

  useEffect(() => {
    console.log("[UseEffectComponent] re-rendering...1");
  });

  useEffect(() => {
    console.log("[UseEffectComponent] re-rendering...2");
  });

  useEffect(() => {
    for (let i = 0; i < 10e7; ++i) {}
    if (value1 === 0) {
      setValue1(() => generateRandomValue());
    }
  }, [value1]);

  useLayoutEffect(() => {
    for (let i = 0; i < 10e7; ++i) {}
    if (value2 === 0) {
      setValue2(() => generateRandomValue());
    }
  }, [value2]);

  return (
    <div>
      <h2>[Example 2] useEffect vs useLayoutEffect</h2>
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
        `}
      >
        value2:
        <span>{value2}</span>
      </div>
    </div>
  );
}
