import { useReducer, useState } from "react";
import { css } from "@emotion/react";

function initializeTable(users) {
  return {
    originalItems: users,
    tableItems: users,
    deleteIdList: [],
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "FILTER_SEARCH": {
      const { keyword } = action.payload;

      const tableItems = state.originalItems.filter(
        ({ id, userName, email, profileUrl }) =>
          keyword === "" ||
          [id, userName, email, profileUrl]
            .map((str) => str.toLowerCase())
            .reduce((checked, cur) => checked || cur.includes(keyword), false)
      );

      return {
        ...state,
        tableItems,
      };
    }

    case "MOVE_ITEM": {
      const { from, to } = action.payload;

      const tableItems = state.tableItems.map((user, idx, arr) =>
        idx === from ? arr[to] : idx === to ? arr[from] : user
      );

      return {
        ...state,
        tableItems,
      };
    }

    case "DELETE_ITEM": {
      const deleteIdList = [...state.deleteIdList, action.payload.id];
      const tableItems = state.tableItems.filter(
        (user) => user.id !== action.payload.id
      );

      return {
        ...state,
        tableItems,
        deleteIdList,
      };
    }

    case "RESET_TABLE": {
      return {
        ...state,
        tableItems: state.originalItems,
      };
    }

    default:
      throw new Error("No related action.");
  }
}

export function UserTable({ users, onApply }) {
  const [state, dispatch] = useReducer(reducer, users, initializeTable);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const deleteUser = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: { id } });
  };

  const resetUsers = () => {
    dispatch({ type: "RESET_TABLE" });
  };

  const applyTable = () => {
    onApply(state.deleteIdList);
  };

  const moveUser = (from, to) => {
    dispatch({ type: "MOVE_ITEM", payload: { from, to } });
    setFrom("");
    setTo("");
  };

  const handleSearch = (e) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
    dispatch({ type: "FILTER_SEARCH", payload: { keyword } });
  };

  return (
    <div>
      <div>
        <label htmlFor="search">Filter user : </label>

        <input
          css={css`
            min-width: 400px;
          `}
          id="search"
          type="text"
          name="search"
          value={searchKeyword}
          onChange={handleSearch}
          placeholder="id, userName, email, profileUrl..."
        />
      </div>

      <table
        css={css`
          width: 100%;
        `}
      >
        <caption>User table!</caption>

        <thead
          css={css`
            background: hotpink;
            color: white;
          `}
        >
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Profile URL</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody
          css={css`
            background: #2ab300;
            color: white;
          `}
        >
          {state.tableItems.map(({ id, userName, email, profileUrl }) => (
            <tr key={id}>
              <td>{id}</td>

              <td>{userName}</td>
              <td>{email}</td>
              <td>{profileUrl}</td>

              <td>
                <button onClick={() => deleteUser(id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={resetUsers}>reset</button>
        <button
          disabled={users.length === state.tableItems.length}
          onClick={applyTable}
        >
          Apply
        </button>

        <div>
          <label htmlFor="from">From</label>
          <input
            id="from"
            type="text"
            name="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="From index"
          />
          <label htmlFor="to">To</label>
          <input
            id="to"
            type="text"
            name="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="To index"
          />
          <button onClick={() => moveUser(Number(from), Number(to))}>
            Move
          </button>
        </div>
      </div>
    </div>
  );
}
