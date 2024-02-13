import { useState, useEffect } from 'react';

export function useDataFetching<T>(apiUrl: string) {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setData(undefined);
    setHasError(false);

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Something went wrong! ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [apiUrl]);

  return { data, isLoading, hasError };
}
