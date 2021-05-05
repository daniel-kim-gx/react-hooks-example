import axios from "axios";
import { useCallback, useState, useEffect } from "react";

export function useFetch(urlGenerator, deps = [], { control = false } = {}) {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [requested, setRequested] = useState(false);

  useEffect(() => {
    if (
      (control && !requested) ||
      fetching ||
      !!error ||
      !!result ||
      deps.filter((d) => !d).length > 0
    ) {
      return;
    }

    setFetching(true);

    axios
      .get(urlGenerator(...deps))
      .then((response) => setResult(response.data))
      .catch(setError)
      .finally(() => {
        setFetching(false);
        setRequested(false);
      });
  }, [
    control,
    requested,
    fetching,
    result,
    error,
    urlGenerator,
    deps,
    ...deps,
  ]);

  const clear = useCallback(() => {
    setResult(null);
    setError(null);
  }, []);

  const request = useCallback(() => {
    setRequested(true);
  }, []);

  return { result, error, request, reload: clear };
}
