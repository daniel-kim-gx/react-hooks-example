import styled from "@emotion/styled";
import {
  useContext,
  useRef,
  useEffect,
  useCallback,
  useState,
  createContext,
} from "react";
import { createPortal } from "react-dom";
import { nanoid } from "nanoid";

const SnackBarContext = createContext(null);

function useSnackBarInternal() {
  const [snackBarList, setSnackBarList] = useState([]);
  const timerIdsRef = useRef([]);

  const toast = useCallback((text) => {
    const id = nanoid();
    setSnackBarList((list) => [...list, { id, text }]);

    const timerId = setTimeout(() => {
      const ids = timerIdsRef.current;
      const removeIndex = ids.findIndex((snackBarObj) => snackBarObj.id === id);
      setSnackBarList((list) => list.filter((obj) => obj.id !== id));
      timerIdsRef.current = timerIdsRef.current.splice(removeIndex, 1);
    }, 2000);

    timerIdsRef.current.push(timerId);
  }, []);

  useEffect(() => {
    const ids = timerIdsRef.current;
    return () => ids.map(clearTimeout);
  }, []);

  return { toast, snackBarList };
}

function SnackBar({ snackBarList }) {
  const snackBarContainerRef = useRef(null);

  useEffect(() => {
    if (!window) return;
    const node = document.createElement("div");
    document.body.appendChild(node);
    snackBarContainerRef.current = node;

    return () => {
      document.body.removeChild(node);
      snackBarContainerRef.current = null;
    };
  }, []);

  return snackBarContainerRef.current
    ? createPortal(
        <SnackBarContainer>
          {snackBarList.map(({ id, text }) => (
            <SnackBarPaper key={id}>{text}</SnackBarPaper>
          ))}
        </SnackBarContainer>,
        snackBarContainerRef.current
      )
    : null;
}

export function SnackBarContextProvider({ children }) {
  const { toast, snackBarList } = useSnackBarInternal();

  return (
    <SnackBarContext.Provider value={toast}>
      {children}
      <SnackBar snackBarList={snackBarList} />
    </SnackBarContext.Provider>
  );
}

export function useSnackBarContext() {
  const context = useContext(SnackBarContext);

  if (!context) {
    throw new Error("Use SnackBarContext inside provider.");
  }

  return context;
}

const SnackBarContainer = styled.div`
  position: absolute;
  bottom: 80px;
  right: 80px;

  & > li {
    margin-top: 12px;
  }
`;

const SnackBarPaper = styled.li`
  background: black;
  color: white;
  border-radius: 8px;

  width: 240px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
