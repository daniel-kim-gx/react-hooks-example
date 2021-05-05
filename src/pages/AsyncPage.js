import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Router, Link } from "@reach/router";
import { useFetch } from "../hooks/useFetch";
import axios from "axios";

export function AsyncPage() {
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
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/users").then((response) => {
      const users = response.data;
      setUsers(users);
    });
  }, []);

  return (
    <div>
      <h2>[Example 1] Simple async fetch</h2>

      <ul>
        {users.map((user) => (
          <li>{JSON.stringify(user)}</li>
        ))}
      </ul>
    </div>
  );
}

function Example2() {
  const [userName, setUserName] = useState("");

  const [users] = useFetch(() => `/api/users`, []);

  const {
    result: user,
    error: userFetchError,
    reload: userReload,
    request,
  } = useFetch((userName) => `/api/users/${userName}`, [userName], {
    control: true,
  });

  const {
    result: address,
    error: addressFetchError,
    reload: addressReload,
  } = useFetch(
    // (user) => `/api/throw-error`,
    (user) => `/api/address/${user.id}`,
    [user]
  );

  const handleChange = (e) => setUserName(e.target.value);

  const handleKeyDown = (e) => {
    const key = e.key;

    if (key !== "Enter") return;

    userReload();
    addressReload();
    request();
  };

  return (
    <div>
      <h2>[Example 2] Complex async fetch</h2>

      <input
        type="text"
        value={userName}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <ul>
        {users &&
          users.map((user) => (
            <li>
              <p>username : {user.userName}</p>
              <p>id : {user.id}</p>
            </li>
          ))}
      </ul>

      {address && (
        <div>
          <span>address:</span>
          {JSON.stringify(address)}
        </div>
      )}

      {userFetchError && (
        <div>
          userFetchError occured : {JSON.stringify(userFetchError.response)}
        </div>
      )}

      {addressFetchError && (
        <div>
          addressFetchError occured :{" "}
          {JSON.stringify(addressFetchError.response)}
        </div>
      )}
    </div>
  );
}
