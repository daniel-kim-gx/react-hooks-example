import { useEffect, useCallback, useRef, useState } from "react";
import { Router, Link } from "@reach/router";
import { css } from "@emotion/react";
import { UserTable } from "../components/UserTable";
import { useFetch } from "../hooks/useFetch";
import axios from "axios";

export function DataPage() {
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

  return (
    <div>
      <h2>[Example 1] useState vs useRef</h2>

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

function Example2() {
  const { result: users, reload } = useFetch(() => "/api/users");

  const deleteUsers = (ids) => {
    axios
      .delete("/api/users", { data: { ids } })
      .then(() => console.log("success"))
      .catch(console.log)
      .finally(reload);
  };

  return (
    <div>
      <h2>[Example 2] Todo table</h2>

      <div>{users && <UserTable users={users} onApply={deleteUsers} />}</div>
    </div>
  );
}
