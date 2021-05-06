import { useRef, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Router, Link } from "@reach/router";
import { useFetch } from "../hooks/useFetch";
import axios from "axios";
import { useSnackBar } from "../hooks/useSnackBar";

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
          <li key={user.id}>{JSON.stringify(user)}</li>
        ))}
      </ul>
    </div>
  );
}

function Example2() {
  const toast = useSnackBar();
  const [userName, setUserName] = useState("");
  const { result: users } = useFetch(() => `/api/users`, []);
  const fetchUserNameRef = useRef("");

  const {
    result: user,
    error: userFetchError,
    reload: userReload,
    request,
    fetching: userFetching,
  } = useFetch((userName) => `/api/users/${userName}`, [userName], {
    control: true,
  });

  const {
    result: address,
    error: addressFetchError,
    reload: addressReload,
  } = useFetch((user) => `/api/address/${user.id}`, [user]);

  const handleChange = (e) => setUserName(e.target.value);

  const handleKeyDown = (e) => {
    const key = e.key;

    if (key !== "Enter") return;

    fetchUserNameRef.current = userName;
    userReload();
    addressReload();
    request();
  };

  useEffect(() => {
    if (!userFetchError) return;

    toast(`Username ${fetchUserNameRef.current} fetch failed.`, {
      variant: "danger",
    });
  }, [userFetchError, toast]);

  useEffect(() => {
    if (!addressFetchError) return;

    toast(
      <span>
        Address related to username <strong>{fetchUserNameRef.current}</strong>{" "}
        fetch failed.
      </span>,
      {
        variant: "danger",
      }
    );
  }, [addressFetchError, toast, userName]);

  return (
    <div>
      <h2>[Example 2] Complex async fetch</h2>

      <input
        type="text"
        value={userName}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={userFetching}
        placeholder="Search some user..."
      />

      {address && (
        <Address address={address} userName={fetchUserNameRef.current} />
      )}

      {!userName && (
        <ul
          css={css`
            list-style: none;
            opacity: 0.3;
          `}
        >
          {users &&
            users.map((user) => (
              <li key={user.id}>
                <p>username : {user.userName}</p>
                <p>id : {user.id}</p>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

function Address({ address, userName }) {
  const { city, country, streetName, timeZone } = address;
  return (
    <div>
      {userName} lives in...
      <div>city: {city}</div>
      <div>country : {country}</div>
      <div>streetName: {streetName}</div>
      <div>timeZone: {timeZone}</div>
    </div>
  );
}
