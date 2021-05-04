import { useState, useLayoutEffect, useEffect } from "react";
import { css } from "@emotion/react";

export function BehaviorPage() {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    console.log("[UseEffectComponent] useLayoutEffect 1 called..");
  }, []);

  useLayoutEffect(() => {
    console.log("[UseEffectComponent] useLayoutEffect 2 called..");
  }, []);

  useEffect(() => {
    console.log("[UseEffectComponent] re-rendering... ");
  });

  // useEffect(() => {
  //   if (value === 0) {
  //     setValue(10 + Math.random() * 200);
  //   }
  // }, [value]);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  console.log("[UseEffectComponent] rendering..");

  return (
    <div>
      <h1>UseEffectComponent</h1>
      <div>
        <button onClick={() => setValue(0)}>update value </button>
      </div>

      <span
        css={css`
          background: blue;
          color: white;
        `}
      >
        value: {value}
      </span>
    </div>
  );
}
