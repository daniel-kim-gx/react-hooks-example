import { useState, useEffect } from "react";

export function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setCount((c) => c + 1), 1000);
    return () => clearInterval(intervalId);
  });

  return (
    <div>
      <div>count : {count}</div>
    </div>
  );
}
