import { useState } from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const request = async <T>(
    url: string,
    method = 'GET',
    body = null,
    headers = { 'Content-type': 'application/json' }
  ) => {
    setLoading(true);
    try {
      const response = await fetch(url, { method, body, headers });
      if (!response.ok)
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      const data: T = await response.json();
      setLoading(false);
      return data;
    } catch (error) {
      console.log(error);
      setLoading(false);
      if (error instanceof Error) {
        setError(error.message);
      }
      throw error;
    }
  };

  return { loading, error, request };
};
