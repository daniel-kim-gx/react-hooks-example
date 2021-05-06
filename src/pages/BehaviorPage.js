import { useState, useLayoutEffect, useEffect } from "react";
import { Router, Link } from "@reach/router";
import { css } from "@emotion/react";
import { Timer } from "../components/Timer";

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
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // mount시 api를 콜해서 timer를 동기화 한다던가, 어떤 외부 state를 바꾸는 등의 effect를 넣는다.
    //
    // subscription하고 해제하기 등의 fake api.
    // logging 넣기. 여러개의 effect hook을 넣어서 데이터를 만든다.
    console.log("Do something that is clearly an EFFECT");
  });

  return (
    <div>
      <h2>[Example 1] Counter</h2>
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
