import { useEffect, useCallback, useRef, useState } from "react";
export function UseStateComponent() {
  const stateRef = useRef(0);
  const [count, setCount] = useState(0);

  const handleRefClick = useCallback(() => {
    console.log("[handleRefClick] current ref value : ", stateRef.current);
    stateRef.current = stateRef.current + 1;
  }, []);

  const handleStateClick = useCallback(() => {
    console.log("[handleStateClick] current count state : ", count);
    setCount((currentCount) => currentCount + 1);
  }, [count]);

  useEffect(() => {
    console.log("[UseStateComponent] rerendering...");
  });

  console.log("[UseStateComponent] component called.");

  return (
    <div>
      <pre>
        <code>stateRref.current : {stateRef.current}</code>
      </pre>

      <pre>
        <code>count state : {count}</code>
      </pre>

      <button onClick={handleRefClick}>Update stateRef</button>
      <button onClick={handleStateClick}>Update count</button>
    </div>
  );
}
