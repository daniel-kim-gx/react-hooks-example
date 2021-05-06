import { css } from "@emotion/react";
import { memo, useCallback, useEffect, useState } from "react";
import { useSnackBar } from "../hooks/useSnackBar";

export function MultipleCounters() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const handleCount1Click = useCallback(() => setCount1(count1 + 1), [count1]);
  const handleCount2Click = useCallback(() => setCount2(count2 + 1), [count2]);
  const handleCount3Click = useCallback(() => setCount3(count3 + 1), [count3]);

  return (
    <div>
      <Counter
        name="counter 1"
        count={count1}
        onIncrement={handleCount1Click}
      />

      <Counter
        name="counter 2"
        count={count2}
        onIncrement={handleCount2Click}
      />

      <Counter
        name="counter 3"
        count={count3}
        onIncrement={handleCount3Click}
      />
    </div>
  );
}

const Counter = memo(({ name, count, onIncrement }) => {
  const toast = useSnackBar();

  useEffect(() => toast(`${name} rendered`));

  return (
    <div>
      <h3>{name}</h3>
      <div>
        <span
          css={css`
            margin-right: 12px;
          `}
        >
          {count}
        </span>
        <button onClick={onIncrement}>Increment count 1</button>
      </div>
    </div>
  );
});
