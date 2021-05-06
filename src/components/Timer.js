import { useState, useEffect } from "react";
import { useSnackBar } from "../hooks/useSnackBar";

export function Timer() {
  const toast = useSnackBar();
  const [count, setCount] = useState(0);

  useEffect(() => {
    toast("Timer synced & logged.");
    const intervalId = setInterval(() => setCount((c) => c + 1), 1000);
    return () => clearInterval(intervalId);
  }, [toast]);

  return (
    <div>
      <div>count : {count}</div>
    </div>
  );
}
