import { useLayoutEffect, useEffect } from "react";

export function UseEffectComponent() {
  useLayoutEffect(() => {
    console.log("[UseEffectComponent] useLayoutEffect called..");
  }, []);

  useEffect(() => {
    console.log("[UseEffectComponent] re-rendering... ");
  });

  return <div>UseEffectComponent</div>;
}
